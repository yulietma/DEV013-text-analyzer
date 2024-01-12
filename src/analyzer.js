const analyzer = {  

  getWordCount: (text) => {
    
    const words = text.trim().split(' ').filter(word => word !== '').length;
    return words;
    //trim elimina los espacios al principio y al final//split divide el texto utilizando espacio como delimitante //filter filtra los elementos que no cumplen con la condicion ()
    //(word => word !== ' ') es una funcion felcha El argumento words es tomado y evalua si words no es una cadena vacia SI NO ES devuelve true SI LO ES  devuleve false 
    //const words = text.trim().split(/\s+/g).length;
    //return words;
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const caracter=text.trim().length;
    return caracter;
  },

  getCharacterCountExcludingSpaces:  (text) => {
    let filtrado = '';//cadena vacia que nos ayuda a alamecenar los caracteres Alfa y Num

    for (let i = 0; i < text.length; i++) {//el bucle continua mienyras el valor de i sea menor a la longitud de texto y despue sincrementara i a 1 en cada interracionn
      const char = text[i];//text[i] representa el caracter en la cadena
  
      if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')) {//si no esta dentro d elos limites no lo cuentes 
      
        filtrado += char;//si es valido agregalo a la cadena 
      }
    }
    const caracterContado = filtrado.length;// Obtiene la longitud (número de caracteres) de la cadena filtrada
    return caracterContado;//retoirna lo filtrano y acumulado
  
    //const textNoS = document.querySelector("textarea[name='escribe']");
    //const caracterExclu = text.target.value.trim().replace([ ])
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },


  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const filtrado = text.trim().split(' ').filter(word => word !=='');
    const TotalLongitud = filtrado.reduce((acc, word) => acc + word.length, 0); // Calcula la longitud total de todas las palabras
    const TotalAcumulado = TotalLongitud / filtrado.length// Calcula el promedio dividiendo la longitud total entre la cantidad de palabras
    const Redondea= Number(TotalAcumulado.toFixed(2));
    return Redondea;
  },

  getNumberCount: (text) => {
    const Inicio = text.trim();
    let ConteoTotal = 0;
    let RecoridoNumero = '';

    for (let i = 0; i < Inicio.length; i++) {
      const char = Inicio[i];
      if ((char >= '0' && char <= '9') || char === '.') {
        RecoridoNumero += char;
      } else if (char === ' ' && RecoridoNumero !== '') {
        ConteoTotal++;
        RecoridoNumero = '';
      }
    }

    // Verifica si hay un número al final de la cadena
    if (RecoridoNumero !== '') {
      ConteoTotal++;
    }

    return ConteoTotal;
  },


  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const Inicio=text.trim();//elimina espacios al final y inicio
    //iniciamos variables
    let RecoridoNumero ='';
    let suma =0;
    //empieza el bucle 
    for ( let i=0; i<Inicio.length; i++){//Recore cada caracter con la vairiable i 
      const char = Inicio[i];// utiliza la variable char y guarda el caracter 
      if ((char >= '0' && char <='9')|| char==='.' ){//si esa variable su contenido es mayor a 0 y menor a 9 o verifica si es numero con punto decimal pero inclute el tipo de dato '==='
        RecoridoNumero+= char // si es asi concatena el valor de char a RecoridoNumero
      }
      else if(RecoridoNumero !== ''){//si RecoridoNumero No esta vacio  

        suma+=parseFloat(RecoridoNumero);//Convierte el contenido de RecorridoNumero a Numero decimaly sumalo a variable suma 
        RecoridoNumero='';//y reinicialo 
      }
    }
    //despues de terminar el bucle verifica si no esta vacio RecorridoNumero
    if(RecoridoNumero !== ''){
      suma+= parseFloat(RecoridoNumero);
    }
    return  suma;//retorn el total de la suma de los numeros encontrados 
  },
}



export default analyzer;
