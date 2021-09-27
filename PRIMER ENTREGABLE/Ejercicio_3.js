//Ejercicio números enteros

let entero_1 = parseInt(prompt("Por favor ingrese el primer número entero"));

let entero_2 = parseInt(prompt("Por favor ingrese el segundo número entero"));

let entero_3 = parseInt(prompt("Por favor ingrese el tercer número entero"));

if (entero_1 == entero_2 && entero_1 == entero_3) {
    document.write("Iguales");
}

else if (entero_1 > entero_2 && entero_1> entero_3){
    document.write(entero_1);
}

else if (entero_2 > entero_1 && entero_2 > entero_3){
    document.write(entero_2);
}

else if (entero_3 > entero_1 && entero_3 > entero_2){
    document.write(entero_3)
}
