/* 
57. Realizar un algoritmo que permita solicitar la calificación de 10 alumnos, los cuales tienen cinco materias. Al final debe imprimir el promedio general de los alumnos. Además de desplegar cuantos aprobaron y cuanto reprobaron. Teniendo en cuenta que la calificación mínima aprobatoria es 7.0 Diseñe un algoritmo que lea un vector de 5 elementos e imprima los números pares.
*/


let matriz = [];
let promedio_estudiante = [];
let promedio_materia = [];
let aprobados = [];
let reprobados = [];

let acumulador_promedio_estudiante = 0;
let acumulador_promedio_materia = 0;
let contador_aprobados = 0;
let contador_reprobados = 0;

//Codigo que crea y rellena una matriz.
for (let i = 0; i < 10; i++){
    matriz[i] = [];
    for (let j = 0; j < 5; j++){
        //Rellenar la matriz utilizando Math.random con 1 solo decimal.
        matriz[i][j] = parseFloat((Math.random()*10).toFixed(1));
    }
}

console.log(matriz);

//Codigo que me saca la nota promedio de cada estudiante.

for (let i = 0; i < 10; i++){
    for (let j = 0; j < 5; j++){
        acumulador_promedio_estudiante += matriz[i][j];
    }
    //Guardar el promedio  de cada estudiante en el vector
    promedio_estudiante.push(parseFloat((acumulador_promedio_estudiante/5).toFixed(1)));
    acumulador_promedio_estudiante = 0;
}

console.log("El promedio de cada estudiante es: \n" + promedio_estudiante);

//Busca el promedio de cada materia
//Para mantener la notacion i filas y j columnas
for (let j = 0; j < 5; j++){
    for (let i = 0; i < 10; i++){
        acumulador_promedio_materia += matriz[i][j];
        //Con 3 pasa, con menos pierde.
        if (matriz[i][j] >= 7){
            contador_aprobados++;
        } else {
            contador_reprobados++
        }
    }
    aprobados.push(contador_aprobados);
    reprobados.push(contador_reprobados);
    promedio_materia.push(parseFloat((acumulador_promedio_materia/10).toFixed(1)));
    acumulador_promedio_materia = 0;
    contador_aprobados = 0;
    contador_reprobados = 0;
}

console.log("El promedio de cada materia es: \n" + promedio_materia);
console.log("El numero de aprobados por materia: \n" + aprobados);
console.log("El numero de reprobados por materia: \n" + reprobados);
