# App Search

Aplicacion para buscar productos y entregar ofertas en base a busqueda de palindormos


## Requerimientos
---

Para poder iniciar este microservicio se requiere el siguienre runtime en el servidor:
- Nodejs >= 12

Adisionalmente esta app necesita de un api que entrega productos (offer-ms)

## Ejecucion
---

Existen varias formas de inciar este artefacto a continuacion se describen 2 formas:

## Iniciar microservicio en servidor de dessarrollo:

1) Se deben definir las siguiente variables de entorno:
    - PORT: (opcional) puerto en el la aplicación estara disponible, si no se especiica el valor por defecto es 3000

2) Instalar dependencias con el comando `npm i`
3) Iniciar app con el comando `npm start`

La aplicacion estará disponible en la url : http://localhost:3000

## Iniciar microservicio en contenedor Docker:

Se incluye un archivo Dockerfile con el cual puede crear una imagen docker para inciar la app, para ello los pasos a seguir son los siguientes:

* Ejecutar comando `docker  build -t <nombre_imagen> .`
* Ejecutar comando `docker run -p 80:80 <nombre_imagen>`

La aplicacion estará disponible en la url : http://localhost:80

## Pruabas del artefacto
---
Este artefacto cuenta con la implementacion Pruebas unitarias.
Antes de poder ejecutar cualquier tipo de prueba es necesario instalar las dependencias con el comando `npm i`

## Pruebas unitarias

Para correr las pruebas unitaris de este microservicio se debe ejecutar el comando `npm run test`
