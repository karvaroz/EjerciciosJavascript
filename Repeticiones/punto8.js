let numero1 =parseInt(prompt("Ingrese un número."));
let numero2 =parseInt(prompt("Ingrese otro número."));

for (i=numero1; i<=numero2; i++){
    if ( i % 2 == 0) {
        document.write("El número " + i + " es par." + "<br>" )
    }
    else {
        document.write("El número " + i  + " es impar." + "<br>" )
    }
    
}