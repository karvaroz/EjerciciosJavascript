
let n = [];

let i = 0;

let numeroDeVeces = parseInt(prompt(`¿Cuántos números va a ingresar?`));

for ( i = 0; i < numeroDeVeces; i++){
    
    let ingresoDatos = parseInt(prompt("ingrese un número"))

    n.push(ingresoDatos);

}

console.log(n);


let primo = true;

let numero = parseInt(prompt("Ingrese un número mayor que uno."));

i =0;

for (let i = 2; i<numero; i++){

    if (numero % i == 0 ){

        primo = false;
    }
}

if (primo == true){

    document.write("El número " + numero + " es primo")

} else {
    
    document.write("El número " + numero + " no es primo")

}