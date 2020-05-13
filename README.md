# Curso de React
- [Curso de React](#curso-de-react)
  - [Instalacion:](#instalacion)
  - [Conceptos](#conceptos)
    - [ReactDOM.render](#reactdomrender)
    - [JSX](#jsx)
    - [Componente vs elemento](#componente-vs-elemento)
    - [Props](#props)


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
