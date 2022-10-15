const { createStore } = require('redux');
const contador = require('./reducer');
const { incremento, decremento, incrementoImpar, incrementoAsyinc } = require('./actions');

// En esta linea creamos nuestro store. Pasandole como parametro nuestro Reducer
var store = createStore (contador);

// Obtenemos el elemento con el id `valor`.
var valor = document.getElementById ("valor");

// Esta funcion nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() { 
  let num = store.getState().contador;
  // Obtenemos la propiedad 'contador' de nuestro store:
  
  // Seteamos el numero obtenido como texto dentro del elemento con id 'valor':

}

// Ejecutamos la funcion 'renderContador':

renderContador ();

// Nos subscribimos al store pasandole la misma funcion. Asi cada vez que llegue una accion, ejecutamos la funcion:

store.subscribe (() => {renderContador ()});

// Por ultimo, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la accion correspondiente:

var btnIncrement = document.getElementbyId ("incremento");
btnIncrement.onClick = () => {store.dispatch (incremento)};

var btnDecrement = document.getElementbyId ("decremento");
btnDecrement.onClick = () => {store.dispatch (decremento)};

var btnImpar = document.getElementById ("incrementoImpar");
btnImpar.onClick = () => {store.dispatch (incrementoImpar())};

var btnAsync = document.getElementbyId ("incrementoAsyinc");
btnAsync.onClick = () => {setTimeout (() => { store.dispatch (incrementoAsyinc()) }, 1000) };

