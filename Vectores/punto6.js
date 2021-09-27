// Declaración 

let vector1 = [1,2,3,4,5,6,7,8];
let vector2 = ["A","B","C","D","E","F","G","H"];
let matrix = [];
let aux2 = [];

// Proceso

for(let i=0; i<8; i++){
    aux2.push(vector2[i],vector1[i])
    if(i%2==1){
        matrix.push([aux2])
        aux2 = []
    }
}

// Salida

for(let i=0; i<matrix.length; i++){
    document.write(matrix[i] + "<br>")
}
