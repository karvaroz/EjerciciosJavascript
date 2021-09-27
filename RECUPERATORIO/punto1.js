//  Calculo de un número factorial 

let num = parseInt(prompt('Ingrese un número'));

let total = 1;

for (var i = 1; i <= num; i++){
    
    total = total * i
}

alert(`El factorial de ${num} es ${total}`); 


// Factores pares e impares 

let impares = [];

let pares = [];

for (var i = 1; i <= num; i++){
    
    if (num % i == 0){
        
        total = total * i
 
        pares.push += i; 
        
        document.write(`los pares son ${pares[i]}` + "<br>");

    } 
    else {

        total = total * i

        impares.push += i
    
        document.write(`los impares son ${impares[i]}` + "<br>");
    }
    
}
    

// Contar 

let contar = parseInt(prompt("Ingrese el número hasta que el que quiere contar"));

x = 1;


while(x <= contar){
    x++; 
    document.write( x-1 + "<br>")
}       
