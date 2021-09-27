

let inicio = parseInt(prompt("Ingrese el valor inicial"));

let final = parseInt(prompt("Ingrese el valor final"));


if (inicio < final) {
    
    for (let i = inicio; i <= final; i++) {
        
        if (i % 2 === 0) {
          
            console.log(i);
        }
    }
} else if (inicio === final) {
   
    if (inicio % 2 === 0) {
    
        console.log(inicio);
    } else {
    
        alert("Usted ingreso dos numeros iguales e impares");
    }
} else {
    
    for (let i = inicio; i >= final; i--) {
    
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
