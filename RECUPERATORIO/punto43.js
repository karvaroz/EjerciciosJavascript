let notasEv = [];
let n = parseInt(prompt('¿Cuántos números va a ingresar dentro del conjunto?'));
for (let i = 1; i <= n; i++) {
    let numero = parseInt(prompt('Ingrese un número'))
    notasEv.push(numero)
}
alert("AVISO INPORTANTE" + "                                                                     -----" + "porfa antes de ingresar los datos de la sigiente pregunta usa las palabras claves de ejecucion que salen en los () y todo en minuscula")
let ejecucion = prompt("que quieres hacer con el vector (-sumar, -restar, -multiplicar, -promedio)")
if (ejecucion == "sumar") {
    alert("la suma del vactor es: " + sumatoria(notasEv))
} else if (ejecucion == "restar") {
    alert("la resta del vactor es: " + diferencia(notasEv))
} else if (ejecucion == "multiplicar") {
    alert("la multiplicacion del vactor es: " + multiplicacion(notasEv))
} else if (ejecucion == "promedio") {
    alert("el promedio del vactor es: " + promedio(notasEv))
}

function sumatoria(numeros) {
    let total = numeros.reduce((a, b) => a + b, 0)
    return total
}
function diferencia(numeros) {
    let total = numeros.reduce((a, b) => a - b, 0)
    return total
}
function multiplicacion(numeros) {
    let total = numeros.reduce((a,b)=>a*b);
    return total 
}
function promedio(numeros) {
    let total=sumatoria(numeros) / numeros.length
    return total
}