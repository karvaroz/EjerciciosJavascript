let matrizNumerosIngresados = [];

let n = parseInt(prompt('¿Cuántos números va a ingresar?'));

for ( let i = 1; i <= n; i++){

    let numeros = parseInt(prompt('Ingrese un número'))

    matrizNumerosIngresados.push(numeros)

}

console.log(matrizNumerosIngresados);

//console.log(matrizNumerosIngresados.sort((a, b) => a - b));

console.log(matrizNumerosIngresados.reverse(matrizNumerosIngresados.sort((a, b) => a - b)));

document.write('Ver consola');