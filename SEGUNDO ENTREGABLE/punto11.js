// Declaración

let array = [];
let num = parseInt(prompt("¿cuantas veces?"));

// Proceso

for (let i=0; i<=num; i++) {
    array.push(parseInt(prompt("Digita un número")));  
}

function factorizar(n) {
    if (n == 0) return 1;
    return n * factorizar(n - 1);
}

// Salida

for (i=0; i<array.length; i++){

    document.write(array[i] + " : " + factorizar(array[i]) + "<br>")
}


