/* 
37. Desarrolle un algoritmo que recorra una matriz e imprima los valores presentes en la diagonal principal y secundaria.
*/

let a = [4, 5, 6]; //[0,2]
let b = [7, 8, 9]; //[1,1]
let c = [1, 2, 3]; //[2,0]
let matriz = [a, b, c]
let vectorUno = []
let vectorDos = []

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        if (i === j){
            vectorUno.push(matriz[i][j])
        }
        if (i + j === 2){
            vectorDos.push(matriz[i][j])
        }

    }
}
console.log(matriz);
console.log("Vector 1")
console.log(vectorUno);
console.log("Vector 2")
console.log(vectorDos);