/* 
5. Desarrolle un algoritmo que recorra la siguiente matriz e imprima los valores presentes en su diagonal principal.
*/

let a = [1, 2, 0];
let b = [3, 1, 4];
let c = [3, 0, 1];
let matriz = [a, b, c];
let vectorUno = [];

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        if (i === j) {
            vectorUno.push(matriz[i][j])
        }
    }
}

console.log(matriz);
console.log("Vector 1")
console.log(vectorUno);

// // Imprimir diagonal principal de una matriz

// let matriz = [ 
//     [1,2,0], 
//     [3,1,4], 
//     [3,0,1] 
// ];

// let diagonalPrincipal = [];

// console.log(matriz);

                 
// for (let i = 0; i < matriz.length; i++){

//     for (let j = 0; j < i; j++){

//         if (i == j){

//             matriz[i][j].push(diagonalPrincipal)

//         }
//     }
// }
  

// console.log(diagonalPrincipal);