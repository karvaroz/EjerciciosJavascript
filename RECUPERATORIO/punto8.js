let numero_datos = parseInt(prompt('Ingrese el número de datos'));

let arreglo = [];

let numeroMayor = 0;

for (let i = 0; i < numero_datos; i++){

    let elemento = parseInt(prompt("Ingrese un numero entero"));

    arreglo.push(elemento);
}

for (let i = 0; i < arreglo.length; i++){

    if(arreglo[i] > numeroMayor){

        numeroMayor = arreglo[i];

        alert(numeroMayor)
    }
}