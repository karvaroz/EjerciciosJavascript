//Programa número par o impar, positivo o negativo 

let num = parseInt(prompt("Ingrese un número."));

if (num %  2 == 0 && num > 0 ){

    alert("El número ingresado es par y es positivo.")

}
else if (num % 2 >= 0 && num < 0){
    
    alert("El número es impar y negativo")

}