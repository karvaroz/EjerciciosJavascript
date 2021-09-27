let diametro = parseFloat(prompt("Ingrese el diámetro de una rueda"));

let grosor = parseFloat(prompt("Ingrese el grosor de una rueda en metros"));

if (diametro > 1.4){

    alert("La rueda es para un vehículo grande.")
}
else if (diametro >0.8 && diametro <= 1.4 ){

    alert("La rueda es para un vehículo mediano.")
}
else {
    
    alert("La rueda es para un vehículo pequeño.")
}