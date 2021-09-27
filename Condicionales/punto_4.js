//Programa que calcula IMC
let peso = parseFloat(prompt("Ingrese su peso."));
let altura = parseFloat(prompt("Ingrese su altura."));
let imc = peso / (altura*2);

if (imc < 18){
    alert("su IMC es:  " + imc + " , usted tiene bajo peso.")
}
else if (imc >= 18  && imc <= 25 ){
    alert("su IMC es:  " + imc + " , usted tiene un peso normal.")
}
else {
    alert ("su IMC es:  " + imc + " , usted tiene sobre peso.")
}
