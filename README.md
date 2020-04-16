The official daily report from [Instituto Nacional de Salud](https://www.ins.gov.co/Noticias/Paginas/Coronavirus.aspx) of Colombia will continue publishing on the [open data portal of the Colombian government](https://www.datos.gov.co/Salud-y-Protecci-n-Social/Casos-positivos-de-COVID-19-en-Colombia/gt2j-8ykr).

Therefore, this script will be archived.

Transforms the official daily report from [Instituto Nacional de Salud](https://www.ins.gov.co/Noticias/Paginas/Coronavirus.aspx) of Colombia into a json file. Available at [https://cdiaz.github.io/covid19-co/data/timeseries.json](https://cdiaz.github.io/covid19-co/data/timeseries.json). Updated every hour betwen 1:30pm - 6:30 pm GMT-5 a day using GitHub Actions.

The json contains the number of Coronavirus confirmed cases in Colombia every day since 06/03/2020:

```
[
  {
    "id":"1",
    "date":"06/03/2020",
    "city":"Bogotá",
    "region":"Bogotá D.C.",
    "status":"Recuperado",
    "age":"19",
    "gender":"F",
    "kind":"Importado",
    "country_from":"Italia"
  },
  ...
]
```
