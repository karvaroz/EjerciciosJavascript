
function llenarMatriz(matriz, tam){

    for(let i=0; i<tam; i++){

         matriz[i] = []

         for(let j=0; j<tam; j++){
             
            matriz[i][j] = parseInt(prompt("Ingrese un número para la matriz")); 
             
            suma += matriz[i][j]          
        }
    }   return suma

}
var tamaño1 = parseInt(prompt("Que tamaño tiene la matriz"))

var matriz = [];

let suma = 0;
 
let promedio = suma / matriz.length;

llenarMatriz(matriz,tamaño1);

console.log(matriz);

console.log(suma);


// console.log(`El promedio de los elementos en la matriz es de ${promedio}`);