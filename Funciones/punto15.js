let numeroCuadernos = parseInt(prompt("Ingrese el número de cuadernos que desea adquirir."));
let precioVenta = parseFloat(prompt("¿Cuál es el precio de venta?"));
let costoCuadernos = 200;
let ganancia = (precioVenta * numeroCuadernos) - (numeroCuadernos * costoCuadernos);

function calculoGanancia(ventas) {
    return ganancia
}

calculoGanancia(ganancia);
alert("La ganancia neta fue de " + ganancia);