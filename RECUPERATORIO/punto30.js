let num = parseInt(prompt('Ingrese un número'));

let total = 1;

for (var i = 1; i <= num; i++){
    
    total = total * i
}

alert(`El factorial de ${num} es ${total}`); 

