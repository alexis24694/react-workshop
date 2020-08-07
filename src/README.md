## CODE CHALLENGE!!!! -- MANTENIMIENTO DE USUARIO
El objetivo de este desafio es poner en práctica conocimientos en react (routing, form, hooks y redux) con el desarrollo de un crud completo.

### IMPORTANTE!!!
- Se recomienda usar function components para el desarrollo del workshop.
- La base de datos y los servicios que se usaran para el workshop están hosteados en el siguiente repositorio: https://cmarchenam@bitbucket.org/cmarchenam/mock-rest-api.git
Los métodos estan mapeados en la carpeta 'services > UserService.js'. Estos se describen a continuación:
    - searchUsers: listado y búsqueda de usuarios.
    - getUserById: obtener un Usuario por ID.
    - deleteUser: eliminar usuario por ID.
    - createUser: crear nuevo usuario.
    - updateUser: actualizar usuario.
- Para el punto 4 y 5 se recomienda abstraer el formulario en un componente aparte, de tal forma que este pueda ser reutilizado tanto para Crear y Editar usuario.
- Se les ha proporcionado un componente en la carpeta 'controls > CustomInput > CustomInput.js'. Es recomendable usar este control para la creación del formulario (opcional!!!).
- El workshop es estimado para ser desarrollado entre 2 a 4 horas, por lo que se dividirá en 2 segmentos: 
    - Segmento 1: Lista, busqueda y eliminación.
    - Segmento 2: Creación y Edición

## PARTE 1: LISTAR USUARIO
Para este punto, se requiere crear un componente que nos permita el listado y búsqueda de usuarios. Este debe poseer un filtro de búsqueda el cual será una sola caja de texto y nos permita buscar por cualquier campo de la tabla. 

## PARTE 2: ELIMINAR USUARIO
Para este punto, Se requiere agregar un opción que nos permita eliminar un registro de la grilla. (Sugerencia: agregar una columna con un botón que nos ejecute la opción eliminar para cada fila).

## PARTE 3: AGREGAR NAVEGACIÓN
Siguiendo con el ejercicio, aquí se nos requerirá configurar la ruta de nuestro componente de listado de usuarios para que en el Componente NAV se pueda generar el link de llamada respectivo.

## PARTE 4: CREAR USUARIO
Lo siguiente a realizar es la creación de usuario, para esto se requiere crear un componente en el cual contenga el formulario con los campos respectivos, un boton cancelar y un boton guardar. Al ejecutar el guardar debe validar que los campos requeridos esten completos (Definirlos los campos propiamente). Si el formulario es válido mostrar un mensaje de confirmación y regresar a la pantalla de búsqueda. En la pantalla de búsqueda, se deberá agregar un botón que nos lleve a la vista Crear Usuario.

## PARTE 5: EDITAR USUARIO
Una vez se pueda registar un usuario, se deberá crear un componente para la edición del mismmo, el cual a su vez, contenga el formulario con los campos respectivos un boton cancelar y un boton guardar. El funcionamiento de los botones deberá ser el mismo que para el componente Crear Usuario. Se deberá agregar una opción para Editar un registro en la pantalla de búsqueda. (Sugerencia: agregar una columna con un botón que nos ejecute la opción editar para cada fila).



