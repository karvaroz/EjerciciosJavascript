//Programa números enteres, mayor, pares e iguales. 
// ESTA INCOMPLETO

let num1 = parseInt(prompt("Ingrese el primer número entero."));
let num2 = parseInt(prompt("Ingrese el segundo número entero."));
let num3 = parseInt(prompt("Ingrese el tercer número entero."));

if (num1 == num2 && num2 == num3){
    document.write("Iguales")
}
else if (num1 > num2 && num1 > num3){
    document.write(num1)
}
else if (num2 > num1 && num2 > num3){
    document.write(num2)
}
else if (num3 > num1 && num3 > num2){
    document.write(num3)
}
else if (num1 % 2 == 0){
    document.write(num1 + "Es par")
}
else if (num2 % 2 == 0){
    document.write(num2 + "Es par")
}
else if (num3 % 2 == 0){
    document.write(num3 + "Es par")
}

/*
let n1 = prompt("Escribe un número");
let n2 = prompt("Escribe otro número");
let n3 = prompt("Escribe otro número");
if (n1 > n2 && n1 > n3) {
document.write(n1);
} else if (n2 > n3) {
document.write(n2);
} else {
document.write(n3);
}
*/