// Programa parqueadero - primer punto taller condicionales

let hora = parseInt(prompt("Ingrese el número de horas que estuvo parqueado el vehículo."));
let minutos = parseInt(prompt("Ingrese los minutos adicionales a las horas que estuvo parqueado el vehículo."));
let precio = 5000;
let resultado = 0;
let fraccion = precio/60
if (hora > 0 && minutos >= 0){
    resultado = (hora*precio) + Math.round((minutos*fraccion))
}

alert("El cliente debe cancelar: " + resultado)