// Ejercicio 4

let visitantes = new Array(5)
let nombre
for(let i=0; i<5; i++){
    nombre = prompt("Ingrese el nombre del visitante");
    if (i==0){
        visitantes[i] = nombre;
    } 
    else{ 
     for (let j=0; j<i; j++){
       if (visitantes[j==nombre]){
           alert("El visitante ya esta en el recinto")
           i--;
           break;}
    
        }
    }  visitantes[i] = nombre;
    
}