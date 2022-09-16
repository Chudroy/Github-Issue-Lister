# Prueba Irontec

## Cómo usar

- Clonea la repo en una carpeta nueva
- ejecuta `npm install`
- crea un archivo `.env` en la raíz del proyecto
- en el archivo `.env`, añade:

```
GITHUB_PAT: tu_personal_access_token_de_github
```
- en dos terminales distintos, ejecuta `nx serve backend` primero en uno, y después `nx serve frontend` en otro.
- abre la aplicación de angular en http://localhost:4200/

Y la aplicación estará lista para probar. El Personal Access Token es opcional, pero aumentará la cantidad de requests que puedas hacer al API de Github. Sin el token, te dará una respuesta 403 las solicitudes a la API al de poco tiempo.

## Objetivo

La funcionalidad de este proyecto consiste en solicitar una repo de github, y de vuelta alistará todos sus issues (y pull requests).

## Aprendizaje
En este proyecto he tenido un primer contacto con, y he aprendido a utilizar:

- Nx
- NgRx
- Tests Unitarios
- Tests de integración
- API de Github

## Nx

Con Nx he aprendido a crear un monorepo, y dentro de él a conectar una aplicación frontend (Angular) con otro backend (Express) a través de la configuración de un archivo proxy `proxy.conf.json`, declarado en el archivo `project.json` de la aplicación frontend. 

Desde Nx también puedo ejecutar los tests de la aplicación frontend con el comando `nx run frontend:test`, o simplemente `nx test` para ejecutar los tests de todas las aplicaciones que tengan el comando configurado.

fuentes: 
- https://nx.dev/getting-started/core-tutorial
- https://nx.dev/getting-started/angular-tutorial
-  https://nx.dev/getting-started/node-tutorial

## NgRx

Con NgRx he aprendido a manejar el estado de la aplicación de Angular utilizando la arquitectura de Store, facilitando el desacoplamiento de los componentes y reduciendo sus respectivos responsabilidades, empleando: 

- Actions: para enviar solicitudes para cambiar el estado actual de la aplicación
- Reducers: para manejar esas solicitudes. En base a la solicitud recibida, los reducers actualizan el estado de una manera u otra.
- Selectors: para tener una referencia a cualquier pieza de estado de interés para un componente, y actualizar la UI según nuevas actualizaciones.

He utilizado también [@ngrx/effects](https://ngrx.io/guide/effects) para manejar los side-effects de la ejecución de acciones, como por ejemplo ejecutar la solicitud http de nuevas issues desde `issues.effects.ts` al interceptar la acción `getNewIssues` enviada desde `GetIssuesComponent`, en vez de que `GetIssuesComponent` tenga una referencia directa al servicio de solicitud, y ejecute el servicio desde el componente. De esta forma, el componente solo tiene la responsabilidad de enviar una acción, sin saber cómo esa acción será procesada.

fuentes: 
- https://ngrx.io/guide/store/walkthrough 
- https://ngrx.io/guide/effects
- https://blog.angular-university.io/angular-2-redux-ngrx-rxjs/
- https://blog.angular-university.io/angular-ngrx-store-and-effects-crash-course/

## Tests

Nx prestablece el entorno de testeo de Angular con el framework Jest. He aprendido a utilizar lo fundamental de este framework, además de lo que he aprendido en la documentación de NgRx para testear la arquitectura de Stores. He implementado mis propios tests, para asegurar el funcionamiento de lo que he creado, y para que un futúro lector de mi código pueda utilizar lo que encuentre en los tests unitarios para entender la funcionalidad pretendida del código que he escrito en cada componente.

También he conseguido un test de integración, en el archivo `src/app/integration-tests.spec.ts`. En este test, se trata de que en el `PaginatorComponent` se resetease el índice del paginador a 0 cuando se buscaban nuevas issues clicando el botón en el componente 'GetIssuesComponent'

fuentes:

- https://jestjs.io/docs/getting-started
- https://ngrx.io/guide/store/testing

# Resultado

El proyecto cumple los requisitos minimos de la prueba, además de los requisitos opcionales de testeo.

- Interacción usuario
  - Solicitar la URL del repositorio en github  ✅
  - Listar (con paginado) las issues de ese repositorio, con información relevante de cada issue ✅
  
- Sistemas utilizados
  - Angular          ✅
  - Angular Material ✅
  - NgRx             ✅
  
- Opcional
  - Tests unitarios  ✅
  - Test de integración ✅
  
  Hay, sin embargo, un bug con el alistador de issues de la prueba, debido al funcionamiento del API de Github: la suma total de issues abiertos y pull requests que se ve en la página web de cualquier repo en Github no coincide con el número total de issues abiertas que se recibe al solicitarlo desde el API.
   
## Reflexión

Este proyecto ha sido sobre todo uno de aprendizaje. En menos de dos semanas, he aprendido la funcionalidad básica de Nx, NgRx y de tests unitarios y de integración con Jest y las funciones auxiliares de Angular. Mientras que la implementación de los requisitos básicos se resolvió rápidamente, mucho tiempo de esta prueba se ha dedicado en entender el porqué detrás de cada cosa. Algunos cabos sueltos que me quedan son:

Por un lado, en Nx, existe la posibilidad de crear una librería donde se guardan los componentes creados de Angular. Al ser un proyecto pequeño, los he guardado en la misma aplicación donde se utilizan. En un entorno profesional no sé si esto es una buena práctica o no.

Por otro lado, En la solicitud de issues de la API de Github, se incluyen los pull requests. No hay una manera directa de filtrarlos cómodamente. Da igual si se filtran en el frontend o en el backend (aunque según [este artículo al final de todo](https://blog.angular-university.io/angular-ngrx-store-and-effects-crash-course/), conviene hacerlo en el front), en el paginado se descompensa el número de issues por página y el número marcado de issues totales. 

Según la [documentación de Github](https://docs.github.com/en/rest/issues/issues#list-repository-issues), la responsabilidad de filtrar los pull requests cae sobre el solicitante, y no hay manera de simplemente pedir a la API de Github que te de issues sin incluir pull requests.

Una posible resolución a este problema sería hacer repetidas solicitudes de issues desde el backend para recibir todas las issues, filtrar todos los pull requests, y devolverlos al frontend, pero esto rápidamente incurre el riesgo de recibir respuestas 403 del API por hacer demasiadas solicitudes en poco tiempo.

Siento que en el contexto de la prueba, esto ha sido un detalle demasiado complejo para pulir, y he optado por incluir un marcador en una esquina de cada issue, si es un pull request, que pone "Pull Request".

En cuanto al testeo, he escrito tests con el objetivo principal de aprender a escribirlos y ver lo que se puede conseguir. Aún me queda por investigar y aprender buenas prácticas sobre escribir tests tanto en general como en el marco de cada framework (por ejemplo, testear NgRx).
