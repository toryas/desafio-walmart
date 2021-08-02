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
Lo primero que se debe hacer para poder iniciar este microservicio es instalar las dependencias del proyecto con el comando `npm i`. Luego para iniciar el miscorservicio en modo desarrollo basta con ejecutar el comando `npm start`, esto levantara el en modo desarrollo.
Este metodo de incialización emplea la transpilacion en momento de ejecución, por lo que su performance no sera el mejor.

## Iniciar microservicio en servidor de produccion:

Como en el caso anterior lo primero que se debe hacer para iniciar este microservicio es instalar sus dependencias con el comando `npm i`. Luego para inciar el microservicion en un ambiente productivo es necesario primero realizar la transpilacion del codigo, para ello primero se debe ejecutar el comando `npm run build`, tras la ejecucion de este comando, se creara un directorio llamado **dist**. Una vez realizada la transpilacion del código se debe ejecutar el comando `npm run start:prod`. 

## Iniciar microservicio en contenedor Docker:

Se incluye un archivo Dockerfile con el cual puede crear una imagen docker para inciar el microservicio, para ello los pasos a seguir son los siguientes:

* Ejecutar comando `docker  build -t <nombre_imagen> .`
* Ejecutar comando `docker run -p 3000:3000 -e MONGO_USER=<user_mongodb> -e MONGO_PASS=<password_mongodb> -e MONGO_HOST=<host_mongodb> <nombre_imagen>`

***Observaciones***:
* El artefacto consulta a una base de datos llamada **promotions**
* El artefacto las credenciales **MONGO_USER** y  **MONGO_PASS** corresponden al usuario admin de la base de datos

## Pruabas del artefacto
---
Este artefacto cuenta con la implementacion de 2 tipos de pruebas: Pruebas unitarias y Pruebas e2e.

## Pruebas unitarias

Para correr las pruebas unitaris de este microservicio se debe ejecutar el comando `npm run test`

### Covertura de código

Para poder realizar un análisis de la covertura de código de las pruebas se debe ejecutar el comando `npm run test:cov`, esto entregara un informe de covertura  consola, además generara una carpeta llamada **coverage** con el reporte.

## Pruebas e2e

Para ejecutar las pruebas e2e se debe ejecutar el comando `npm run test:e2e`