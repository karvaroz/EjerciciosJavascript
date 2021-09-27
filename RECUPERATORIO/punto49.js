let fila1 = [1,2,3]
let fila2 = [4,5,6]
let fila3 = [7,8,9]

let matriz = [fila1, fila2, fila3]
for (let i=0; i<matriz.length; i++){
    for(let j=0; j<matriz.length; j++){
        matriz[i][j] = j+1;
    }

}
console.log(matriz);

document.write("Ver consola");

//a = [1,2,3]; b = [4,5,6]; c = [7,8,9]   