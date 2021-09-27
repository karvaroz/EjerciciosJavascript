
let arreglo = new Array (5);

let numeroCadena = " "

for (let i=0; i<5; i++){


    arreglo[i] = parseInt(prompt("Ingrese un número"))

    numeroCadena = numeroCadena + arreglo [i] + " - ";
}

alert(numeroCadena)