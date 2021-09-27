// Realizar un algoritmo que permita ingresar y mostrar los 
// nombres de varios paises en un arreglo unidimensional.
// El usuario debe definit el tamaño del arreglo. 

// bidimensional: La posicion es [Fila][Columna]

let cant = parseInt(prompt("Ingrese los países que desea ingresar"));
let arrePa = new Array(cant)
for (let i=0; i<cant; i++){
    arrePa[i] =prompt("Ingrese un país")
}
for (let i=0; i<cant; i++){
    document.write("El país almacenado en la posición: " + i + " es " + arrePa[i] + "<br>")
}