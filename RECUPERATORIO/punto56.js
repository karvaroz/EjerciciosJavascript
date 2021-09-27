let aux = [["x","x","x","x","x"], ["x","x","x","x","x"],["x","x","x","x","x"]];

let matriz = [[1,2,5,3,9],[1,2,5,3,9],[1,2,5,3,9],[1,2,5,3,9]];

let puntos = 0;

while(puntos<10){

    let fila = parseInt(prompt(""));

    let colum = parseInt(prompt(""));

    let fila2 = parseInt(prompt(""));

    let colum2 =parseInt(prompt(""));

    if (matriz[fila][colum] == matriz[fila2][colum2]){

        puntos++;

        aux[fila][colum]=matriz[fila][colum]

        aux [fila2][colum2]=matriz[fila2][colum2]
    }
    for(let i=0; i<aux.length; i++){
        
        console.log(aux[i] + "<br>");

    }console.log("puntos" + puntos)


}