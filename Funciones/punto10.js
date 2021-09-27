let edades = [];
let numEdades = parseInt(prompt("Ingrese el número de edades"));

function llenarArreglo (edades) {
    for (i=0; i<numEdades; i++){
        edades.push(parseInt(prompt("Ingrese la edad")))
    }
    
}

function contarMayores(edades) {
    let contador = 0
    for (i=0; i<numEdades; i++ ){
        if (edades[i]>=18){
            contador ++
            
        }
    }
    return contador
    
}
llenarArreglo(edades);
alert("La cantidad de mayores de edad son: " + contarMayores(edades));