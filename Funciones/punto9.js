let notas = [];
let numNotas = parseFloat(prompt("¿Cuántas notas va a ingresar?"));
for (i=0; i < numNotas; i++) {
    notas.push(parseFloat(prompt("Ingrese la nota")))
}

function promedio (notas){
    let suma = 0
    for (i =0; i < numNotas.length; i++){
        suma += notas[i]
    }
    let prom = sum /3
    return prom
}

if (prom > 3.0) {
    alert("Usted va ganando la materia, su promedio es " + promedio(notas))
} else {
    alert("Usted va perdiendo la materia, su promedio es " + promedio(notas))
}