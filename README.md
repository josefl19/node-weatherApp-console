# Weather console app

Aplicación de consola para buscar una ciudad y mostrar sus datos como longitud, latitud, nombre y datos del clima del lugar seleccionado.

## Paquetes utilizados

- [colors](https://www.npmjs.com/package/colors) : Personalización de salidas en la consola.
- [inquirer](https://www.npmjs.com/package/inquirer) : Permitir el uso de los comandos en la interfaz de forma interactiva.
- [axios](https://www.npmjs.com/package/axios) : Permitir el uso de los comandos en la interfaz de forma interactiva.
- [dotenv](https://www.npmjs.com/package/dotenv) : Permitir el uso de los comandos en la interfaz de forma interactiva.

## API consumidas

- [Mapbox](https://docs.mapbox.com/api/search/geocoding/) : API para obtener información de una ciudad.
- [OpenWeather - Current weather data](https://openweathermap.org/current) : API para obtener datos del clima segun latitud y longitud.

## Consideraciones

Colocar las API keys personales en el archivo `.env` para que la aplicación funcione correctamente.

## Vistas de funcionalidad

- Inicio de la app

![alt text](https://github.com/josefl19/images-readme/blob/2478b62d48b5281dc26b6c532ded4efd7fd54a2d/node-weatherap-console/inicio.png "Inicio de la app")

- Busqueda de una ciudad

![alt text](https://github.com/josefl19/images-readme/blob/2478b62d48b5281dc26b6c532ded4efd7fd54a2d/node-weatherap-console/busqueda-ciudad.png "Buscar una ciudad")

- Selección de una ciudad y muestra de información

![alt text](https://github.com/josefl19/images-readme/blob/2478b62d48b5281dc26b6c532ded4efd7fd54a2d/node-weatherap-console/seleccion-informacion-ciudad.png "Seleccion de la ciudad y muestra de información")

- Lista del historial de busquedas hechas

![alt text](https://github.com/josefl19/images-readme/blob/2478b62d48b5281dc26b6c532ded4efd7fd54a2d/node-weatherap-console/historial-busqueda.png "Historial de busqueda")
