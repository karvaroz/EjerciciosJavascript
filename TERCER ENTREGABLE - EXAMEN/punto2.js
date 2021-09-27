// // PUNTO 2 - SUELDO 

// let horasNormal = parseInt(prompt("Ingrese el número de horas que trabajo el empleado (El máximo de jornada normal es de 48 horas)"));
// let horasExtras = parseInt(prompt("Ingrese las horas extras que laboro el trabajador"));
// let pagoHoraNormal = 4000;
// let pagoHoraExtra = 8000;
 


// if (horasNormal <= 48 && horasExtras < 10 ) {
//     let pagoNormal = horasNormal*pagoHoraNormal
//     let pagoExtra = horasExtras*pagoHoraExtra
//     alert("Pago de hora normal es " + pagoNormal + " y pago de horas extras " + pagoExtra)
// } else if (horasNormal <= 48 && horasExtras == 10){
//     let pagoNormal = horasNormal*pagoHoraNormal
//     let pagoExtra = (10*8000)
//     alert("Pago de hora normal es " + pagoNormal + " y pago de horas extras " + pagoExtra) 
  
// } else if (horasNormal <= 48 && horasExtras > 10){
//     let pagoNormal = horasNormal*pagoHoraNormal
//     let pagoExtra = (10*8000) + (12000*horasExtras - (10*8000))
//     alert("Pago de hora normal es " + pagoNormal + " y pago de horas extras " + pagoExtra) 
// } else {
//     alert ("Indica correctamente el número de horas normal (Máx. 48) y las horas extras.")
// }


const hora_normal = 10000;
const hora_extra = 2*hora_normal;
const hora_extra_extra = 3*hora_normal;

let horas_trabajadas = parseInt(prompt("Ingrese horas trabajadas"));
let salario_extra = 0;
let salario_extra_extra = 0;
let salario_normal = 0;

if (horas_trabajadas < 48){
    salario_normal = horas_trabajadas*hora_normal;
} else {
    salario_normal = horas_trabajadas*hora_normal - (horas_trabajadas-48)*hora_normal;
}

if (horas_trabajadas-48 >= 1){
    if(horas_trabajadas <= 56){
        salario_extra = (horas_trabajadas-48)*hora_extra;
    } else {
        salario_extra = (horas_trabajadas-48)*hora_extra - (horas_trabajadas-56)*hora_extra;
    }
}

if (horas_trabajadas-56 >= 1){
    salario_extra_extra = (horas_trabajadas-56)*hora_extra_extra;
}

let salario_total = salario_normal+salario_extra+salario_extra_extra;

console.log(salario_total);