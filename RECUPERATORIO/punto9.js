
let numeroEntero_1 = parseInt(prompt('Ingrese un número entero.'));

let numeroEntero_2 = parseInt(prompt('Ingrese un número entero.'));

let numeroEntero_3 = parseInt(prompt('Ingrese un número entero.'));

if (numeroEntero_1 === numeroEntero_2 && numeroEntero_1 === numeroEntero_3){
    
    alert(`Iguales`)


} else { 
    
    if (numeroEntero_1 > numeroEntero_2 && numeroEntero_1 > numeroEntero_3){

        alert(numeroEntero_1)
    
    }  else if ( numeroEntero_2 > numeroEntero_1 && numeroEntero_2 > numeroEntero_3){
    
        alert(numeroEntero_2)
    
    } else { alert(numeroEntero_3)
    
    }

}

if (numeroEntero_1 % 2 == 0 ) {

    document.write (`${numeroEntero_1} es par` + "<br>")

} else if (numeroEntero_2 % 2 == 0){

    document.write (`${numeroEntero_2} es par` + "<br>" )

} else if ( numeroEntero_3 % 2 == 0){

    document.write (`${numeroEntero_3} es par` + "<br>" )
} 


