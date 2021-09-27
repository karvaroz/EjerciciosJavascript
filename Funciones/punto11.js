let vectorNum = [];
let resultado = [];
let datos = parseInt(prompt("¿Cuántos números va a ingresar?"))

function llenar(resultado){
    for(i=0; i<datos; i++){
        resultado.push(parseInt(prompt("Ingrese un número")))
    }
}
function multiplicar(resultado){
    let multiplo = parseInt(prompt("ingrese el múltiplo"));
    for(i=0; i<datos; i++){
        vectorNum.push(resultado[i]*multiplo)
    }
    return vectorNum
}
llenar(resultado);
alert (multiplicar(resultado));