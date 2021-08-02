# Microservicio Offer MS

Microservicio encargado de entrergar listado de productos y entregar ofertas en base a busqueda de palindormos

## Endpoint dispobles

|         Path         | Method | Parametros                                            | Description                                                                                       |
| :------------------: | :----: | :---------------------------------------------------- | :------------------------------------------------------------------------------------------------ |
| /products/byd/:value |  GET   | <li>**value:** valor de referencia para busqueda</li> | trae los productos donde los artibutos **banrd** o **descrition** contengan el valor de **value** |
| /products/id/:value  |  GET   | <li>**value:** valor de referencia para busqueda</li> | trae los productos donde los artibutos **id** contengan el valor de **value**                     |


## Requerimientos
---

Para poder iniciar este microservicio se requiere el siguienre runtime en el servidor:
- Nodejs >= 12

Adisionalmente este microservicio necesita de una base de datos para poder obtener los productos:

- BD MongoDB

## Ejecucion
---

Existen varias formas de inciar este artefacto a continuacion se describen 3 formas:

## Iniciar microservicio en servidor de dessarrollo:

1) Se deben definir las siguiente variables de entorno:
    - MONGO_USER: nombre de usuario de admin de mongoDB
    - MONGO_PASS:  contraseña de usuario de admin de mongoDB
    - PORT: (opcional) puerto en el que escuchara el microservicio, si no se especifica el microservicio estada escuchando en el puerto 3000

2) Instalar dependencias con el comando `npm i`
3) Iniciar miscroservicio con el comando `npm start`

***Observaciones***:
* El artefacto consulta a una base de datos llamada **promotions**

## Iniciar microservicio en servidor de produccion:

1) Se deben definir las siguiente variables de entorno:
    - MONGO_USER: nombre de usuario de admin de mongoDB
    - MONGO_PASS:  contraseña de usuario de admin de mongoDB
    - PORT: (opcional) puerto en el que escuchara el microservicio, si no se especifica el microservicio estada escuchando en el puerto 3000
2) Instalar dependencias con el comando `npm i`
3) Realizar transpilacion de codigo con el comando `npm run build`
4) Iniciar microservicio con el comando `npm run start:prod`

***Observaciones***:
* El artefacto consulta a una base de datos llamada **promotions**


## Iniciar microservicio en contenedor Docker:

Se incluye un archivo Dockerfile con el cual puede crear una imagen docker para inciar el microservicio, para ello los pasos a seguir son los siguientes:

* Ejecutar comando `docker  build -t <nombre_imagen> .`
* Ejecutar comando `docker run -p 3000:3000 -e MONGO_USER=<user_mongodb> -e MONGO_PASS=<password_mongodb> -e MONGO_HOST=<host_mongodb> <nombre_imagen>`

***Observaciones***:
* El artefacto consulta a una base de datos llamada **promotions**
* El artefacto las credenciales **MONGO_USER** y  **MONGO_PASS** corresponden al usuario admin de la base de datos
* El microservicio estara escuchando en el puerto 3000

## Pruabas del artefacto
---
Este artefacto cuenta con la implementacion de 2 tipos de pruebas: Pruebas unitarias y Pruebas e2e.
Antes de poder ejecutar cualquier tipo de prueba es necesario instalar las dependencias con el comando `npm i`

## Pruebas unitarias

Para correr las pruebas unitaris de este microservicio se debe ejecutar el comando `npm run test`

### Covertura de código

Para poder realizar un análisis de la covertura de código de las pruebas se debe ejecutar el comando `npm run test:cov`, esto entregara un informe de covertura  consola, además generara una carpeta llamada **coverage** con el reporte.

## Pruebas e2e

Para ejecutar las pruebas e2e se debe ejecutar el comando `npm run test:e2e`