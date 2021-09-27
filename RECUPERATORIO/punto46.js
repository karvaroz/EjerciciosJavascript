/* 
46. Prepara un programa que divida dos números que introduzca el usuario. Si el Segundo número es cero, se le deberá avisar y volver a pedir tantas veces como sea necesario, hasta que introduzca un número distinto de cero, momento en que se calculará y mostrará el resultado de la división.
*/


function division() {
    let count=0;
    do{
    let numeroUno = arseFloat(prompt("Ingresa primer valor"));
    let numeroDos = parseFloat(prompt("Ingresa segundo valor"));

        if (!numeroDos == 0) {
            count++;
            return numeroUno/numeroDos;
        }
        console.log("Vuelve a ingresarlo");
    }while(count==0);
    
}

console.log(division());