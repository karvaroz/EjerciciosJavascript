let frase = prompt("Ingrese su frase preferida");

let repeticion = parseInt(prompt("Ingrese cuántas veces quiere que se repita"));

let cantidad=1;

while(cantidad<= repeticion){

    console.log(frase + "\n");

    document.write(frase + "<br>");
    
    cantidad=cantidad+1;
}
