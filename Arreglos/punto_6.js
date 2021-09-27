// Programa de sumatoria de números negativos, y el promedio de los positivos
let sumNeg = 0, sumPos = 0;
let num, prom;
let contPos = 0;
for (i=1; i<= 6; i++){
     num = parseInt(prompt("Ingrese un número"));
    if (num<0) {
        sumNeg += num;
       
    } else {
        sumPos = sumPos + num; 
        contPos++;
        
    }
}
prom = sumPos / contPos
alert ("La suma de los números negativos es: " + sumNeg) 
alert ("El promedio de los números positivos es: " + prom)