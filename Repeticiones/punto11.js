let inicial = parseInt(prompt("Ingrese un número inicial"));
let final = parseInt(prompt("Ingrese un número final"));

let suma = 0;


for (i=0; i<=final; i++) {
    suma += inicial++
}

alert("El total de la suma es " + suma);
