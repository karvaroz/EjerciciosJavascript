let n = [];

let numeroDeVeces = parseInt(prompt(`¿Cuántos números va a ingresar?`));

for (let i = 0; i < numeroDeVeces; i++){
    
    let ingresoDatos = parseInt(prompt("ingrese un número"))

    n.push(ingresoDatos);

}

console.log(n);

document.write(`Ver consola para ver el vector N.` + "<br>");

for (let i = 0; i < numeroDeVeces; i++){
    
    if (n[i]%2 === 0){
        
        document.write("Los pares son: " + n[i] + "<br>");
    }
    
}



