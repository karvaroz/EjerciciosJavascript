// Ejercicio feria de libros

let valor = parseFloat(prompt("Ingrese el valor de la compra"));
let cargo = prompt("Por favor ingrese su cargo (estudiante, profesor o director)");
if (cargo=="estudiante"){
    let total= (valor*0.9)
    alert("El total de la compra con descuento, si aplica es: " +  total)
}
else if (cargo=="profesor"){
    let total= (valor*0.8)
    alert("El total de la compra con descuento, si aplica es: " + total)
}
else if (cargo=="director"){
    let total= (valor*0.75)
    alert("El total de la compra con descuento, si aplica es: " + total)
}
else  {
    alert("El cargo ingresado debe ser: estudiante, profesor o director para acceder a un descuento")
}