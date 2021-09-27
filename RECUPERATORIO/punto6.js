
let temperaturas = [];

let sumaTemperaturas = 0;

let promedioTemperaturas = sumaTemperaturas / temperaturas.length;

for ( let i = 1; i <= 10; i++){

    let entradaDatos = parseFloat(prompt('Ingrese temperatura en Celsius'));

    temperaturas.push(entradaDatos)

}

console.log(temperaturas);

for (let i = 0; i <= temperaturas.length; i++){

    sumaTemperaturas = sumaTemperaturas + temperaturas[i]
}

console.log(sumaTemperaturas);

if (promedioTemperaturas >= 25.6){
    alert(`Frio.`)
} else {
    alert(`Calor.`)
    
}
console.log(promedioTemperaturas);

// /* 
// 6. Cree un algoritmo que lea un vector de 10 posiciones, correspondiente a la temperatura en grados Celsius de alguna ciudad. Si el promedio de temperaturas es 25.6 o más, debe imprimir “Calor”, de lo contrario debe imprimir “Frio”.
// */


// let vectorTemperatura = [];
// let promedio = 0;
// let resultado = 0;

// let cant = parseInt(prompt("Cuantos días, deseas ingresar"));
// for (let i = 0; i < cant; i++) {
//     let ingresar = parseFloat(prompt("Ingrese temperatura del día " + (i + 1) + " en grados °C"));
//     vectorTemperatura.push(ingresar);
// }

// vectorTemperatura.forEach(
//     function (a) {
//         promedio += a;
//     }
// )
// resultado = (promedio.toFixed(2)) / 3;

// if (resultado >= 25.6) {
//     console.log("Temperatura promedio es de " + resultado + "C°");
//     console.log("Esta haciendo calor");
// } else {
//     console.log("Temperatura promedio es de " + resultado + "C°");
//     console.log("Esta haciendo frio");

// }