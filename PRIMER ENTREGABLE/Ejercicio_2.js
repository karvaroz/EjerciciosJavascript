// Ejercicio banco

let varDeposito = parseInt(prompt("Por favor ingrese el valor depositado"));
let interesAnual;
if (varDeposito>10000000){
    interesAnual = (varDeposito*0.10);
    document.write("El interés anual a pagar es: " + interesAnual);
}
else if (varDeposito >= 5000000 && varDeposito <=10000000){
    interesAnual = (varDeposito*0.08);
    document.write("El interés anual a pagar es: " + interesAnual);
}   
else if (varDeposito >=2000000 &&  varDeposito < 5000000){
    interesAnual = (varDeposito*0.05);
    document.write("El interés anual a pagar es: " + interesAnual);
}
else  {
    interesAnual = 0
}
console.log("El interés anual a pagar es: " + interesAnual)