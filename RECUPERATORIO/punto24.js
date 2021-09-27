let num =parseInt(prompt("Ingrese cuantos números desea contar."));

let acumulador_positivos = 0;

for (i = 0; i <= num; i++){
    if (num > 0){
        acumulador_positivos += 1
    }

}


alert("El usuario ingresó " + acumulador_positivos + " números positivos.")