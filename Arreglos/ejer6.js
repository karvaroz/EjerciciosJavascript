// crear arreglo vacio que lea 5 números
let arreglo = new Array (5);
let numeroCadena = " "
for (let i=0; i<5; i++){
    //Introducen los números al arreglo
    arreglo[i] = parseInt(prompt("Ingrese un número"))
    numeroCadena = numeroCadena + arreglo [i] + " - ";
}
alert(numeroCadena)