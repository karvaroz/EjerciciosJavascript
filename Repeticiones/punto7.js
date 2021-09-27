let numero1 =parseInt(prompt("Ingrese un número inicial."));
let numero2 =parseInt(prompt("Ingrese otro número final."));

for (i=numero1; i<=numero2; i++){
    if ( i % 2 == 0) {
        document.write("Los números pares, entre " + numero1 + " y " + numero2 + " son " + i + "<br>" )

    }
    
}