/* 
66. Escriba una función que calcule la enésima potencia de cualquier número, otra que calcule la enésima raíz, el programa debe solicitar al usuario un numero de entrada e iterar hasta que el usuario decida parar la ejecución. El programa debe preguntarle en cada iteración si desea calcular una potencia o una raíz.
*/

//La función  Math.pow() devuelve la  base elevada al exponente , esto es, baseexponente.
//Math.pow(base, exponente)
//El método toFixed() formatea un número usando notación de punto fijo.
function potencia(numero, base){
    return Math.pow(numero, base).toFixed(1);
}

function raiz(numero, base){
    return Math.pow(numero, base).toFixed(1);
}

function validar(opc, n, b) {
    switch (opc) {
        case 1:
            potencia(n,b);
            break;
        case 2:
            raiz(n,b);
            break;
        default:
            console.log("Ingrese la opción 1 o 2");
            break;
    }
}


let opcion = parseInt(prompt("Selecione 1 para calcular Potencia o  2 para Raiz"));

let numero= parseFloat(prompt("Ingresa un número"));

let base= parseFloat(prompt("Ingrese valor de la base"));

let r= potencia(numero, base);

console.log(r);

document.write(r);