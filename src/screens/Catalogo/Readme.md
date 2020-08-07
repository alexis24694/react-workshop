# Coding Challenge
## ¡Bienvenido al Wokshop!

## Visión general
Para completar este desafío, deberán escribir Function Components!

## El objetivo
Este desafío es poner en práctica nuestras habilidades escribiendo codigo en React. Para lograr este propósito estamos brindando un conjunto de pantallas y una fuente API.

Se espera que este desafío tome alrededor de 1-2 horas por equipo.

## El reto
Usando las pantallas (imágenes en la carpeta screens -> Catalogo) proporcionadas como referencia, necesitaremos crear un conjunto de componentes React para representar la aplicación. También se tendrá que consumir servicios con respuesta JSON, y poder filtrar esos datos y usar los campos relevantes.

#### Recomendable usar Redux en alguna de las búsquedas: Movies o Series (o ambas).

En este ejercicio, buscaremos un código simple, bien diseñado y eficaz.

## Detalles:
Deberá crear las siguientes 3 páginas con React:

Una página de "Catálogo", ver imágen catalogo.png.

Una página de "Serie", ver imagen series.png.

Una página de "Películas", ver imagen movies.png.

A partir de la página de Catalogo, se enlazan con la página "Serie" y la página "Películas".

Para cada página, deberá consumir los servicios de catalogue expuesto en el json-server, luego:

Mostrar los 21 primeros registros.
Donde los registros tengan en el atributo: [releaseYear >= 2010].
Ordenado por el valor del atributo: title, en orden alfanumérico ascendente.
Para el filtro de la página "Serie" en:
Donde el registro tiene un valor en el atributo [programType = serie].

Para el filtro de la página "Películas" en:
Donde el registro tiene un valor en el atributo [programType = película].

## Los atributos que debe usar para mostrar  son:
- title
- releaseYear
- images → posterArt → url

# NOTA: pueden usar los estilos de :  bootstrap que ya estan importados en la solución.