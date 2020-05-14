import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

import App from './components/App';

const container = document.getElementById('app');

ReactDOM.render(<App />, container);




/*

// const JSX = <h1>Hello, Platzi Badges!</h1>;
// const element = React.createElement('a', {href:'http://platzi.com'}, 'Vamos a Platzi') // Esto es lo mismo que JSX

// const name = 'Emmanuel';
// const element = React.createElement('h1',{}, `Mi nombre es ${name}`);
// const JSX = <h1>Mi nombre es {name}</h1> // Esto es igual que react.createElement()

// const JSX=(
//   <div>
//     <h1>Hola, soy Emmanuel</h1>
//     <p>Soy Frontnd Developer</p>
//   </div>
// )

// const element = React.createElement(
//   'div',
//   {},
//   React.createElement('h1',{},'Hola, soy Emmanuel'),
//   React.createElement('p',{}, 'Soy Frontend Developer')
//   );

// React = CreateElement
// ReactDOM = appendChild
const element = document.createElement('h1')
elemento.innerHTML('Hello World in JS')
const container = document.getElementById('App')
container.appendChild(element)*/ 