# Curso de React
- [Curso de React](#curso-de-react)
  - [Instalacion:](#instalacion)
  - [Conceptos](#conceptos)
    - [ReactDOM.render](#reactdomrender)
    - [JSX](#jsx)
    - [Componente vs elemento](#componente-vs-elemento)
    - [Props](#props)
    - [Enlazando eventos](#enlazando-eventos)
    - [Manejo de estado](#manejo-de-estado)
    - [Levantamiento del estado](#levantamiento-del-estado)
    - [React Router](#react-router)
    - [Ciclo de vida de un componente](#ciclo-de-vida-de-un-componente)
    - [Llamadas a un API](#llamadas-a-un-api)
    - [MD5](#md5)


## Instalacion:

Clona el repositorio:
`git clone --branch 1.ReactDOM.render https://github.com/Sparragus/platzi-badges.git`

Instala:
`npm install`

Inicia el servidor:
`npm run start`

## Conceptos

### ReactDOM.render
React y ReactDOM trabajarán en conjunto.

React como análogo a **[createElement](https://developer.mozilla.org/es/docs/Web/API/Document/createElement)**

ReactDOM a **[appendChild](https://developer.mozilla.org/es/docs/Web/API/Node/appendChild)**

[ReactDOM.render()](https://es.reactjs.org/docs/react-dom.html) toma dos argumentos: Qué queremos renderizar y dónde lo queremos renderizar. ReactDOM.render(__qué__, __dónde__);

### JSX
Es una extensión de JavaScript creada por Facebook para el uso con la biblioteca React. Sirve de preprocesador (como Sass o Stylus a CSS) y transforma el código generado con React a JavaScript.
JSX tiene su alternativa que es React.createElement pero es preferible JSX porque es mucho más legible y expresivo. Ambos tienen el mismo poder y la misma capacidad.

React.createElement recibe 3 argumentos:

- El tipo de elemento que estamos creando
- Sus atributos o props
- el children que es el contenido.

Ejemplo:

`React.createElement(‘a’, { href: ‘https://platzi.com’ }, ‘Ir a Platzi’);`

### Componente vs elemento
Un elemento es a un objeto como un componente es a una clase. Si el elemento fuera una casa, el componente serían los planos para hacer esa casa.

Identificación de componentes
Para identificarlos debes hacerte las siguientes preguntas:

- ¿Qué elementos se repiten? Estos son los elementos en una lista o los que comparten aspecto visual y su funcionalidad
- ¿Qué elementos cumplen una función muy específica? Estos sirven para encapsular la lógica y permiten juntar muchos comportamientos y aspectos visuales en un solo lugar.


### Props
Los props que es la forma corta de properties son argumentos de una función y en este caso serán los atributos de nuestro componente como class, src, etc.

Estos props salen de una variable de la clase que se llama this.props y los valores son asignados directamente en el ReactDOM.render().

### Enlazando eventos
React dispone de eventos. Cada vez que se recibe información en un input se obtiene un evento onChange y se maneja con un método de la clase this.handleChange
Los elementos button también tienen un evento que es onClick.
Cuando hay un botón dentro de un formulario, este automáticamente será de tipo submit. Si no queremos que pase así hay dos maneras de evitarlo: especificando que su valor es de tipo button o manejándolo desde el formulario cuando ocurre el evento onSubmit.

### Manejo de estado
Hasta esta clase todos los componentes han obtenido su información a través de props que vienen desde afuera (otros componentes) pero hay otra manera en la que los componentes pueden producir su propia información y guardarla para ser consumida o pasada a otros componentes a través de sus props. La clave está en que la información del state a otros componentes pasará en una sola dirección y podrá ser consumida pero no modificada.

- Para guardar la información en el estado se usa una función de la clase component llamada setState a la cual se le debe pasar un objeto con la información que se quiere guardar.
- Aunque no se ve, la información está siendo guardada en dos sitios. Cada input guarda su propio valor y al tiempo la está guardando en setState, lo cual no es ideal. Para solucionarlo hay que modificar los inputs de un estado de no controlados a controlados.

### Levantamiento del estado
Levantar el estado es una técnica de React que pone el estado en una localización donde se le pueda pasar como props a los componentes. Lo ideal es poner el estado en el lugar más cercano a todos los componentes que quieren compartir esa información.

Algo interesante que le da el nombre a React es su parte de “reactivo” ya que cada vez que hay un cambio en el estado o en los props que recibe un componente se vuelve a renderizar todo el componente y todos sus descendientes.

### React Router
Single Page Apps (SPA): Aplicaciones que cargan una sola página de HTML y cualquier actualización la hacen re-escribiendo el HTML que ya tenían.

React Router (v4): Nos da las herramientas para poder hacer SPA fácilmente. Usaremos 4 componentes:

- BrowserRouter: es un componente que debe estar siempre lo más arriba de la aplicación. Todo lo que esté adentro funcionará como una SPA.
- Route: Cuando hay un match con el path, se hace render del component. El component va a recibir tres props: match, history, location.
- Switch: Dentro de Switch solamente van elementos de Route. Switch se asegura que solamente un Route se renderize.
- Link: Toma el lugar del elemento `<a>`, evita que se recargue la página completamente y actualiza la URL.

### Ciclo de vida de un componente
Cuando React renderiza los componentes decimos que entran en escena, cuando su estado cambia o recibe unos props diferentes se actualizan y cuando cambiamos de página se dice que se desmontan.

- Montaje:
    Representa el momento donde se inserta el código del componente en el DOM.
Se llaman tres métodos: constructor, render, componentDidMount.

- Actualización:
    Ocurre cuando los props o el estado del componente cambian.
Se llaman dos métodos: render, componentDidUpdate.

- Desmontaje:
    Nos da la oportunidad de hacer limpieza de nuestro componente.
Se llama un método: componentWillUnmount.

### Llamadas a un API
Las llamadas a una API siguen un patrón similar siempre que las hacemos, cada llamada consta de tres estados:

- Loading: cuando la petición se envía y estamos esperando.
- Error: se debe dejar un mensaje para el usuario para arreglar el error o volver a intentarlo.
- Data: los datos nos pueden llegar de dos formas, o en error o con los datos requeridos.

### MD5

MD5 es una pequeña librería a la cual se le da un texto y ella regresa un hash.

Podremos hacer pruebas para cifrar nuestros textos a md5 en el siguiente sitio [MD5 Online](https://md5online.es/cifrar-md5)

Hola Platzi = d3bfb9302fb1007c0f996b41cba2818c

