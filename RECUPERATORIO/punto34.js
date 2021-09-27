let limit = parseInt(prompt("¿cuántas personas quieres ingresar"))
for (i = 0; i < limit; i++) {
    listEstudiantes.push(prompt("dame el nombre del estudiante para ingresarlo en la lista"))
}
ubicar(listEstudiantes)
function ubicar(list) {
    let nombreIncontrar = prompt("dame el nombre del estudiante a encontrar")
    let nombre = list.includes(nombreIncontrar)
    var nombreE = Boolean
    if (nombreIncontrar == nombre) {
        nombreE = true
    } else if (nombreIncontrar != nombre) {
        nombreE = false
    }
    if (nombreE == true) {
        document.write("el estudiante " + listEstudiantes[ubicacion] + " en la ubicacion " + ubicacion + 1 + " del listado")
    } else if (nombreE == false) {
        alert("el estudiante no se encuentra en listado")
        let repetir = prompt("desea ingresar el estudiante (si o no)")
        if (repetir == "si") {
            ubicar(l)
        } else if (repetir == "no") {
            document.write(list)
        }
    }
}