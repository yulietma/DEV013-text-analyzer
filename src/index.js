import analyzer from './analyzer.js';
const textarea = document.querySelector("textarea[name='escribe']");//querySelector me ayuda a llamar el atributo name de un elemento en este caso dentro del textarea ay un atributo name
const boton = document.querySelector("#resetbutton");

boton.addEventListener("click", (event) => {
  textarea.value = "";
});
