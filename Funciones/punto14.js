// Función Matriz 



function llenarMatriz(matriz, tam){
    for(let i=0; i<tam; i++){
         matriz[i] = []
         for(let j=0; j<tam; j++){
             matriz[i][j] = parseInt(prompt("Ingrese un número para la matriz"));           
        }
    }    
}
// Matriz 1 
var tamaño1 = parseInt(prompt("Que tamaño tiene la matriz"))
var matriz1 = [];
llenarMatriz(matriz1,tamaño1)
console.log(matriz1)

// Matriz 2
var tamaño2 = parseInt(prompt("Que tamaño tiene la matriz"))
var matriz2 = [];
llenarMatriz(matriz2,tamaño2)
console.log(matriz2)



function buscarElemento(dato) {
    for(let f=0; f<tamaño2; f++){
        for (let c=0; c<tamaño2; c++){
            if (dato == matriz2[f][c]){
                return true;
            } 
        }
    }
    return false;
}

function llenarVectorRepetidos(matriz1) {
    let vector = [];
    for (let i=0; i<tamaño1; i++){
        for (let j=0; j<tamaño1; j++){
            if (buscarElemento(matriz1[i][j])){
                vector.push(matriz1[i][j])
            }
            
        }
    } return vector;
}    
if (tamaño1==tamaño2){
    console.log(llenarVectorRepetidos(matriz1));
} else {
    alert("No se puede ejecutar, las matrices deben ser de igual tamaño.")
}


