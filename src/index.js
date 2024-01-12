import analyzer from "./analyzer.js";

const textarea = document.querySelector("textarea[name='escribe']");//querySelector me ayuda a llamar el atributo name de un elemento en este caso dentro del textarea ay un atributo name
const boton = document.getElementById("resetbutton");
//limpia el textarea con el boton
boton.addEventListener("click", () => {
  textarea.value ="";
  li1.textContent="Recuento de palabras:0"+"";
  li2.textContent="Recuento de caracteres:0"+"";
  li3.textContent="Caracteres sin espacio:0"+"";
  li4.textContent="Recuento de números:0"+"";
  li5.textContent="Suma de números:0"+"";
  li6.textContent="Longitud media de palabras:0"+"";
});

const li1= document.querySelector('.palabra');
const li2= document.querySelector('.caracter');
const li3= document.querySelector('.ex');
const li4= document.querySelector('.num');
const li5= document.querySelector ('.mas');
const li6= document.querySelector('.long');

//contador de palabras
textarea.addEventListener('input', function(e){
  li1.textContent=  "Recuento de Plabras:" + analyzer.getWordCount(e.target.value) ;
})

//contador de caracteres
textarea.addEventListener('input', function (e){
  li2.textContent= "Recuento de caracteres:" + analyzer.getCharacterCount(e.target.value)
})
//contador de caracteres excluyendo espacios
textarea.addEventListener('input', function(e){
  li3.textContent= "Caracteres sin espacio:" + analyzer.getCharacterCountExcludingSpaces(e.target.value)
})
textarea.addEventListener('input', function(e){
  li4.textContent= "Recuento de números:" + analyzer.getNumberCount(e.target.value)
})
textarea.addEventListener('input', function (e){
  li5.textContent= "Suma Numeros:" + analyzer.getNumberSum(e.target.value)
})
//contador de longitud de palabras
textarea.addEventListener('input', function(e){
  li6.textContent= "Longitud media de palabras:" + analyzer.getAverageWordLength(e.target.value)
})


