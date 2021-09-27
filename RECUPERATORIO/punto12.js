
//let vector = [1,2,3,4,5,6,7,8,9,10,11,12,14,15,16];

// let vector = [];


// for (i = 0; i < vector.length; i++){

//     document.write(vector[i] + "<br>")

// }

var matriz=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

const numerosUno = matriz.filter(numeros => {
    return numeros <=4
});

const numerosDos = matriz.filter(numeros => {
    return numeros > 4 && numeros <=8
});

const numerosTres = matriz.filter(numeros => {
    return numeros > 8 && numeros <=12
});

const numerosCuatro = matriz.filter(numeros => {
    return numeros > 12 && numeros <=16
});

document.write(numerosUno);
document.write('\n' + numerosDos);
document.write('\n' + numerosTres);
document.write('\n' + numerosCuatro);


