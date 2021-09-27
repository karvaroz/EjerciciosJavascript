// // EXAMEN DE CONOCIMIENTOS
// // PUNTO 1 - ZOOLOGICO
// // ENUNCIADO DEL EJERCICIO INCOMPLETO 

// let animal = prompt("Indique que animal desea estudiar (jirafas, tigres, leones)");
// let edad = prompt("Para edades de 0 a 5 escriba 1, Para edades de 6 a 9 escriba 2, más de 10 años escriba 3");

// let jirafas = 50;
// let tigres = 100;
// let leones = 200;

// if (animal == "jirafas" && edad == 1){
//     for (i = 0; i <= 50; i++){
//         let edadAleat = Math.floor((Math.random() * (20-0))+0);
//         if (edadAleat >= 0 && edadAleat<5){
//             let contadorEdades = 0;
//             contadorEdades++
//             let porcentajeEdades = (contadorEdades*100)/animal
//             alert("De la muestra de " + animal + " entre edades 0 y 4 hay " + contadorEdades)
//         }
//     }
// } else if (animal == "jirafas" && edad == 2){
//     for (i = 0; i <= 50; i++){
//         let edadAleat = Math.floor((Math.random() * (20-0))+0);
//         if (edadAleat >= 0 && edadAleat<5){
//             let contadorEdades = 0;
//             contadorEdades++
//             let porcentajeEdades = (contadorEdades*100)/animal
//             alert("De la muestra de " + animal + " entre edades 6 y 9 hay " + contadorEdades)
//         }
//     }

// } else if (animal == "jirafas" && edad == 3){
//     for (i = 0; i <= 50; i++){
//         let edadAleat = Math.floor((Math.random() * (20-0))+0);
//         if (edadAleat >= 0 && edadAleat<5){
//             let contadorEdades = 0;
//             contadorEdades++
//             let porcentajeEdades = (contadorEdades*100)/animal
//             alert("De la muestra de " + animal + " más de 10 años ha " + contadorEdades)
//         }
//     }

// } else {
//     alert("ingrese animal: jirafas, tigres, leones, Edad: 1,2,3 ")
// }


function generador_vectores(tamano, max){
    let vector = [];
    for(let i = 0; i < tamano; i++){
        vector[i] = parseFloat((Math.random() * (max - 1) + 1).toFixed(2));
    }
    return vector;
}

let animal = prompt("Ingrese elefantes, jirafas o chimpances");
let muestra = 0;
let contador_uno_dos = 0;
let contador_dos_cinco = 0;
let contador_mas_cinco = 0;

if (animal === "elefantes"){
    muestra = generador_vectores(20, 10);
} else if (animal === "jirafas"){
    muestra = generador_vectores(15, 10);
} else if (animal === "chimpances"){
    muestra = generador_vectores(40, 10);
} else {
    alert("Animal no encontrado");
}

for (let i = 0; i < muestra.length; i++){
    if (muestra[i] >= 1 && muestra[i] <= 2){
        contador_uno_dos++;
    } else if (muestra[i] > 2 && muestra[i] <= 5){
        contador_dos_cinco++;
    } else {
        contador_mas_cinco++;
    }
}

console.log("El porcentaje entre 1 y 2 es: " + (contador_uno_dos/muestra.length)*100 + "%");
console.log("El porcentaje entre 2 y 5 es: " + (contador_dos_cinco/muestra.length)*100 + "%");
console.log("El porcentaje de mas de 5 es: " + (contador_mas_cinco/muestra.length)*100 + "%");