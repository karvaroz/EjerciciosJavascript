let matriz = [];
let promedio_estudiantes = [];
let promedio_materias = [];
let aprobados = [];
let reprobados = [];

let acumulador_estudiantes = 0;
let acumulador_materias = 0;
let numero_aprobados = 0;
let numero_reprobados = 0;

for (let i = 0; i < 24; i++){
    matriz[i] = [];
    for (let j = 0; j < 6; j++){
        matriz[i][j] = parseFloat((Math.random()*5).toFixed(1));
    }
}

console.log(matriz);

//Calcular el promedio de cada estudiante.

for (let i = 0; i < 24; i++){
    for (let j = 0; j < 6; j++){
        acumulador_estudiantes += matriz[i][j];
    }
    promedio_estudiantes.push(parseFloat((acumulador_estudiantes/6).toFixed(1)));
    acumulador_estudiantes = 0;
}

console.log("El promedio de cada estudiante es: \n" + promedio_estudiantes);

//Recorrer la matriz al reves 

for (let j = 0; j < 6; j++){
    for (let i = 0; i < 24; i++){
        acumulador_materias += matriz[i][j];
        if (matriz[i][j]>=3){
            numero_aprobados++;
        } else {
            numero_reprobados++;
        }
    }
    aprobados.push(numero_aprobados);
    reprobados.push(numero_reprobados);
    promedio_materias.push(parseFloat((acumulador_materias/24).toFixed(1)));
    acumulador_materias = 0;
    numero_reprobados = 0;
    numero_aprobados = 0;
}

console.log("El promedio de cada materia es: \n" + promedio_materias);
console.log("El numero de aprobados por materia es: \n" + aprobados);
console.log("El numero de reprobados por materia es: \n" + reprobados);