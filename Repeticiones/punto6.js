//no funciona
/*
let nro=parseInt(prompt("Ingrese 6 números enteros, positivos o negativos."));
let sumaNegativos = 0;
let promedioPositivos =0;



for (i=0; i<=nro.lenght; i++){
    if (nro < 0){
        sumaNegativos =sumaNegativos + nro 
        alert("La sumatoria de los números negativos es: " + sumaNegativos)
    }
    else{
        promedioPositivos = promedioPositivos + nro
        alert("El promedio de los número ")
    }


}
*/

let contador_negativos = 0;
let acumulador_positivos = 0;
let contador_positivos = 0;


for (let i = 0; i = 6; i++ ){
    let numero = parseInt(prompt("Ingrese un número"));
    if (numero >= 0 ){
        acumulador_positivos += numero
        contador_positivos++;
    } else {
        contador_negativos ++;
    }
}

let promedio = acumulador_positivos/contador_positivos;

alert("El promedio de número positivos es " + promedio);
alert("Los números negativos es " + contador_negativos)