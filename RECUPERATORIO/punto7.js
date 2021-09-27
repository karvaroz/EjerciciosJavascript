let numero_datos = parseInt(prompt('Ingrese el número de datos'));

let arreglo = [];

for (let i = 0; i < numero_datos; i++){

    let elemento = parseInt(prompt("Ingrese un numero entero"));

    arreglo.push(elemento);
}

alert(arreglo.sort());