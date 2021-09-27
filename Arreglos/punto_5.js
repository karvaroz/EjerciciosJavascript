//Programa que da los divisores de un número ingresado

let numerDiv = parseInt(prompt("Ingrese un número al que se le va a sacar el divisor"));

for (let i=1; i<=numerDiv; i++){
  
    if (numerDiv % i == 0)
      document.write(i + "<br>");
}