const analyzer = {  
  getWordCount: (text) => {
//return("")
//.split("")
//.filter((palabra)=> palabra!=="")
//.filter((palabra)=> ! /\d+/.test+(palabra)).length;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces  (text) {
    const textNoS = document.querySelector("textarea[name='escribe']");
    const caracterExclu = text.target.value.trim().replace([ ])
      //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
}



export default analyzer;
