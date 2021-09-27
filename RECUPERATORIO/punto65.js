
//let frase = prompt('Ingrese una palabra (Palíndromo u otro)');

const  frase = (cadena) =>{    
  return cadena.split("").reverse().join("") == cadena;  
    
}

//let fraseDos = prompt('Ingrese una palabra');
 
const fraseDos = (cadena) =>{

  let l = cadena.length;
  
  for (let i = 0; i < l/2; i++) {
    if (cadena[i] !== cadena[l - 1 - i]) {
      return console.log("La oración no es palíndromo");
    } else {
      return console.log("La oración no es palíndromo");
    }
  }
}
  
frase("ana");

fraseDos("bob");



