let kilos = parseFloat(prompt("Ingrese el número de kilos de manzanas."));

let precio = 10000;

let venta = kilos * precio;

if (kilos >=0 && kilos <=2 ){

    alert(`El usuario debe cancelar: " ${venta} sin descuento.`)
}
else if (kilos > 2.01 && kilos <= 5){

    alert("El usuario debe cancelar: " + (venta - (venta*0.10)) + " con descuento")
    
}
else if (kilos > 5.01 && kilos <= 10){

    alert("El usuario debe cancelar: " + (venta - (venta*0.15)) + " con descuento")
}
else if (kilos > 10.01){

    alert("El usuario debe cancelar: " + (venta - (venta*0.2)) +" con descuento")
}
else {
    alert("Cantidad no válida")
}