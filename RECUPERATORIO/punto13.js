var vectorUno = [];
var vectorDos = [];
let datosUno = parseInt(prompt("dame los numero de datos que quieres ingresar a la primera lista de numeros "))
for (i = 0; i < datosUno; i++) {
    vectorUno.push(parseInt(prompt("dame el numero")))
}
let datosDos = parseInt(prompt("dame los numero de datos que quieres ingresar a la segunda lista de numeros "))
for (j = 0; j < datosDos; j++) {
    vectorDos.push(parseInt(prompt("dame el numero")))
}
var iguales = [];
if (vectorUno.length == vectorDos.length) {
    for (var i = 0; i < vectorUno.length; i++) {
        for (var j = 0; j < vectorUno.length; j++) {
            if (vectorUno[i] == vectorDos[j])
                iguales.push(vectorUno[i]);
        }
    }
} else if (datosUno < datosDos) {
    for (var i = 0; i < vectorUno.length; i++) {
        for (var j = 0; j < vectorUno.length; j++) {
            if (vectorUno[i] == vectorDos[j])
                iguales.push(vectorUno[i]);
        }
    }
} else if (datosUno > datosDos) {
    for (var i = 0; i < vectorDos.length; i++) {
        for (var j = 0; j < vectorDos.length; j++) {
            if (vectorUno[i] == vectorDos[j])
                iguales.push(vectorDos[i]);
        }
    }

}

document.write("vectorUno= " + vectorUno)
document.write("<br/>" + "vectorDos= " + vectorDos)
document.write("<br/>" + iguales);
console.log(iguales)

