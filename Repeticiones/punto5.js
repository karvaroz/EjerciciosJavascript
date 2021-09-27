let a = parseInt(prompt("Ingrese el número para hallar sus divisores"));
for (i=1; i<=100;i++){
    if (a%i ==0)
    document.write("Los divisores hasta 100 de " + a + " son: " + i + "<br>")
}