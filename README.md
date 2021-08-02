# Desafio Walmart

Este es un monorepo en el cual contiene 3 proyectos:

- [**search-app**](/search-app): Aplicacion web, para busqueda de productos y ofertas en base a busqueda de palindromos.
- [**offer-ms**](/offer-app): Microsevicio que entrega oferta de productos en base a busquedas por id ó description y brand.
- [**database**](/database): Script con volcado de data para base de datos MongoDB

Para más informacion de cada proyecto haga clic en el nombre dle proyecto para acceder a su documentacion.

## Inicialización del stack

Para inicializar el proyecto **Desafio Walmart** (sear-app, offer-ms y database) existe un archivo ***docker-compose.yml*** con la configuracion del stack, que le permitira levantar los 3 comonentes del proyecto en un ambiende docker. Para ello debe seguir las sisuignetes instrucciones:

1. Clonar proyecto desde github
2. Ejecutar comando `ddocker-compose build`
3. Ejecutrar comando `docker-compose run`

Siguiendo estas sintrucciones se levantaran 3 contenedores y podra acceder a las aplicaciones en las siguientes rutas:

- **search-app** 
    - http://localhost:8080
- **offer-ms** 
    - http://localhost:3001/id/:value
    - http://localhost:3001/byd/:value

Tambien es posible los proyectos de forma individual desde sus respectivas carpetas, podra encontrar las istrucciones en los archivos Readme de cada proyecto.