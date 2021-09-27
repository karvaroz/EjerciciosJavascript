// Programa número por día de la semana

let dia = parseInt(prompt("Ingrese un número del 1 al 7"));
/*
if (dia == 1){
    alert("1 - Lunes")
}
else if (dia == 2){
    alert("2 - Martes")
}
else if (dia == 3){
    alert("3 - Miércoles")
}
else if (dia == 4){
    alert("4 - Jueves")
}
else if (dia == 5){
    alert("5 - Viernes")
}
else if (dia == 6){
    alert("6 - Sábado")
}
else if (dia == 7){
    alert("7 - Domingo")
}
else {
    alert("Error, número no válido.")
}
*/

switch (dia){
    case 1: alert("1 - Lunes")
    break;
    case 2: alert("2 - Martes")
    break;
    case 3: alert("3 - Miércoles")
    break;
    case 4: alert("4 - Jueves")
    break;
    case 5: alert("5 - Viernes")
    break;
    case 6: alert("6 - Sábado")
    break;
    case 7: alert("7 - Domingo")
    break;
    default: alert("Error, número no válido.")

}
