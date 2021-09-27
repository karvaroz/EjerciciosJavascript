//Ejercicio número 7 del taller de arreglos
let a = [1,2,3]
let b = [4,5,6]
let c = [7,8,9]

let matriz = [a, b, c]
//let mid = math.round(matriz.length/2)-1;
//document.write(matriz[mid][mid]);
for (let i=0; i<matriz.length; i++){
    for(let j=0; j<matriz.length; j++){
        if(i==j && i==Math.floor(matriz.length/2)){
            alert("El valor de la mitad es " + matriz[i][j])
        }
    }
}
