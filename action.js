const puppeteer = require('puppeteer');
const csv = require('csvtojson/v2');
const fs = require('fs');
const path = require('path');
const downloadPath = path.join(__dirname, 'data');

(async () => {
  const browser = await puppeteer.launch({
    headless: true
  });
  const page = await browser.newPage()
  await page._client.send('Page.setDownloadBehavior', {
    behavior: 'allow',
    downloadPath:  downloadPath,
  });
  await page.setDefaultNavigationTimeout(0);
  await page.goto('https://e.infogram.com/01266038-4580-4cf0-baab-a532bd968d0c', {
    
    waitUntil: 'domcontentloaded'
  });
  await download().then(async () => {
    await csv2json();
  });

  async function download() {
    try {
      await page.waitForSelector('.igc-data-download', {
        timeout: 90000
      });
      await page.click('.igc-data-download');
    } catch (err) {
      throw err
    }
  }

  async function csv2json() {
    try {
      await csv({
        headers: ["id", "date", "city", "region", "status", "age", "gender", "kind", "country_from"]
      })
      .fromFile(path.join(downloadPath, 'Casos1.csv'))
      .then((jsonObj) => {
        fs.writeFileSync(path.join(downloadPath, 'timeseries.json'), JSON.stringify(jsonObj), { mode: 0o755 })
      })
    } catch (err) {
      throw err
    }
  }

  await browser.close();

})();