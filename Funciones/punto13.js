var tamaño = parseInt(prompt("Que tamaño tiene la matriz"))
var matrizNum = [];
function llenarMatriz(matriz, tam){
   for(let i=0; i<tam; i++){
       matriz[i] = []
       for(let j=0; j<tam; j++){
           matriz[i][j] = parseInt(prompt("Ingrese un número para la matriz"))
       }
   }

}
function crearVectorDiagPrincipal(matriz,tam){
    diagonalPrinc = []
    for(let i=0; i<tam; i++){
       diagonalPrinc.push(matriz[i][i])
    }
    return diagonalPrinc;
}

function crearVectorDiagSecundaria(matriz,tam){
    diagonalSecu = []
       let i = 0
       for (let j=tam-1; j>=0; j--){
           diagonalSecu.push(matriz[i][j])
           i++
       }
    
    return diagonalSecu;

   
}

function promedioVector(vector) {
    let sumaNumeros = 0;
    for (i=0; i<vector.length; i++){
        sumaNumeros+=vector[i]
    }
    let promedio = sumaNumeros/vector.length
    return promedio;
}
llenarMatriz(matrizNum,tamaño)
console.log(matrizNum)
console.log(crearVectorDiagPrincipal(matrizNum,tamaño));
console.log(crearVectorDiagSecundaria(matrizNum,tamaño));

let vectorP = [];
let vectorS = [];
vectorP = crearVectorDiagPrincipal(matrizNum,tamaño);
vectorS = crearVectorDiagSecundaria(matrizNum,tamaño);
console.log(promedioVector(vectorP));
console.log(promedioVector(vectorS));
