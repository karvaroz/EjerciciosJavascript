// let paises = [];
// let enero = [];
// let febrero = [];
// let marzo = [];
// let promTrim=[];
// for(let i = 0; i<4;i++){
// let nombre = prompt("Ingrese un país");
// paises.push(nombre);
// }



// for(let i = 0; i<4;i++){
// let temp = parseInt(prompt(`Ingrese la temperatura de ${paises[i]} en el mes de enero`))
// enero.push(temp);
// enero.sort((a,b)=>b-a);
// }



// for(let i = 0; i<4;i++){
// let temp = parseInt(prompt(`Ingrese la temperatura de ${paises[i]} en el mes de febrero`))
// febrero.push(temp);
// febrero.sort((a,b)=>b-a);
// }

// for(let i = 0; i<4;i++){
// let temp = parseInt(prompt(`Ingrese la temperatura de ${paises[i]} en el mes de marzo`))
// marzo.push(temp);
// marzo.sort((a,b)=>b-a);
// }



// for(let i=0; i<paises.length;i++){
// let promTrimestre = (enero[i]+febrero[i]+marzo[i])/3
// promTrim.push(promTrimestre);
// alert(`El promedio trimestral de temperatura de ${paises[i]} es ${promTrimestre}`);
// }




// alert(`${paises[promTrim.indexOf(Math.max.apply(null, promTrim))]} fue el país con mayor temperatura trimestral`);
// alert(`${paises[promTrim.indexOf(Math.min.apply(null, promTrim))]} fue el país con menor temperatura trimestral`);
// let tempAlt=[enero[0],febrero[0],marzo[0]]
// tempAlt.sort((a,b)=>b-a);
// alert(`El pico de temperatura fue de ${tempAlt[0]} grados.`)

function generar_matriz_con_paises(filas, columnas){
    let matriz = [];
    for (let i = 0; i < filas; i++){
        matriz[i] = [];
        for (let j = 0; j < columnas; j++){
            if (j === 0){
                matriz[i][j] = "pais";
            } else {
                matriz[i][j] = parseFloat(Math.random().toFixed(2));
            }
            
        }
    }
    return matriz;
}

function extraer_matriz_auxiliar(matriz){
    let aux = [];
    for (let i = 0; i < matriz.length; i++){
        aux[i] = [];
        for (let j = 0; j < matriz[i].length; j++){
            aux[i][j] = matriz[i][j];
        }
        aux[i].shift();
    }
    return aux;
}

function promedio_fila(matriz){
    let prom = []
    let contador = 0;
    let acumulador = 0;
    for (let i = 0; i < matriz.length; i++){
        for (let j = 0; j < matriz[i].length; j++){
            acumulador += matriz[i][j];
            contador++;
        }
        prom.push(acumulador/contador);
        acumulador = 0;
        contador = 0;
    }
    return prom;
}
//parte a), nada mas cambiarle los random por prompt.
let paises = generar_matriz_con_paises(4,4);
console.log(paises);

let auxiliar = extraer_matriz_auxiliar(paises);
console.log(auxiliar);

//parte b)

let promedios = promedio_fila(auxiliar);

for (let i = 0; i < 4; i++){
    console.log("El promedio de temperatura de " + paises[i][0] + " es " + promedios[i]);
}

//parte c)
let aux_max = 0;
let aux_indice = 0;
let aux_min = promedios[0];
let aux_indice_min = 0;

//mayor y menor temperatura promedio.
for (let i = 0; i < 4; i++){
    if (promedios[i] >= aux_max){
        aux_max = promedios[i];
        aux_indice = i;
    }
    if (promedios[i] <= aux_min){
        aux_min = promedios[i];
        aux_indice_min = i;
    }
}

console.log("La mayor temperatura es de " + paises[aux_indice][0] + " y es " + promedios[aux_indice]);
console.log("La menor temperatura es de " + paises[aux_indice_min][0] + " y es " + promedios[aux_indice_min]);

//parte d)

let aux_max_matriz = 0;
let aux_min_matriz = auxiliar[0][0];

for (let i = 0; i < auxiliar.length; i++){
    for (let j = 0; j < auxiliar[i].length; j++){
        if (auxiliar[i][j] >= aux_max_matriz){
            aux_max_matriz = auxiliar[i][j];
        }
        if (auxiliar[i][j] <= aux_min_matriz){
            aux_min_matriz = auxiliar[i][j];
        }
    }
}

console.log("El pico mayor de temperatura es de " + aux_max_matriz);
console.log("El pico menor de temperatura es de " + aux_min_matriz);