import analyzer from "./analyzer.js";

const textarea = document.querySelector("textarea[name='escribe']");//querySelector me ayuda a llamar el atributo name de un elemento en este caso dentro del textarea ay un atributo name
const boton = document.querySelector("#resetbutton");
//limpia el textarea con el boton
boton.addEventListener("click", () => {
  textarea.value = "";
  li1.textContent="";
  li2.textContent="";
  li3.textContent="";
  li4.textContent="";
  li5.textContent="";
  li6.textContent="";
});

const li1= document.querySelector('.palabra');
const li2= document.querySelector('.caracter');
const li3= document.querySelector('.ex');
const li4= document.querySelector('.num');
const li5= document.querySelector ('.mas');
const li6= document.querySelector('.long');

//contador de palabras
textarea.addEventListener('input', function(e){
  li1.textContent=  + analyzer.getWordCount(e.target.value) ;
})

//contador de caracteres
textarea.addEventListener('input', function (e){
  li2.textContent= "Caracteres:" + analyzer.getCharacterCount(e.target.value)
})
//contador de caracteres excluyendo espacios
textarea.addEventListener('input', function(e){
  li3.textContent= "Caracteres sin espacio:" + analyzer.getCharacterCountExcludingSpaces(e.target.value)
})
textarea.addEventListener('input', function(e){
  li4.textContent= "Numeros:" + analyzer.getNumberCount(e.target.value)
})
textarea.addEventListener('input', function (e){
  li5.textContent= "Suma Numeros:" + analyzer.getNumberSum(e.target.value)
})
//contador de longitud de palabras
textarea.addEventListener('input', function(e){
  li6.textContent= "Promedio Longitud:" + analyzer.getAverageWordLength(e.target.value)
})


