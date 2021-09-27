
let salarioMinimo = parseFloat(prompt("Ingrese el salario minimo vigente"));
let salarioDevengado = parseFloat(prompt("Ingrese su sueldo actual"));

function validarSubsidio (minimo, salario){
    if (salario <=(minimo*2)){
        return true 
    }  else { 
        return false
        }
}

if (validarSubsidio(salarioMinimo,salarioDevengado)){
    alert("Tiene derecho a subsidio")
} else { 
    alert ("No tiene derecho a subsidio")
}