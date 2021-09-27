// Programa 3 parciales estudiante, aprobado o reprobado

let parcial1 = parseFloat(prompt("Ingrese la nota del parcial 1."));
let parcial2 = parseFloat(prompt("Ingrese la nota del parcial 2."));
let parcial3 = parseFloat(prompt("Ingrese la nota del parcial 3."));
let promedio = (parcial1 + parcial2 + parcial3) / 3;

if (promedio >=3){
    alert("El estudiante ha aprobado la asignatura.")

}
else{
    alert("El estudiante no aprobo la asignatura")
}