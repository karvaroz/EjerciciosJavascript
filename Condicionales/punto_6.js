// Escriba un programa que calcule el perímetro y 
// el área de un rectángulo, un cuadrado o un círculo.


let opcion = parseInt(prompt("Ingrese 1 para un rectángulo, 2 para un cuadrado y 3 para un círculo."));
let p = 0;
let area = 0;

if (opcion == 1){
    // rectángulo 
    let base = parseInt(prompt("¿Cuál es la base del rectángulo?"))
    let altura = parseInt(prompt("¿Cuál es la altura del rectángulo?"))
    p = 2*base + 2* altura 
    area = base * altura
    document.write("El perímetro del rectángulo es: " + p  + " El área del rectángulo es: " + area)

}

else if (opcion == 2){
    // cuadrado 
    let base = parseInt(prompt("¿Cuál es la base del cuadrado?"))
    let lado = parseInt(prompt("¿cuál es el lado del cuadrado?"))
    p = 4 * base
    area = lado * 2
    document.write("El perímetro del cuadrado es: " + p + " El área del cuadrado es: " + area)
    
}


else if (opcion == 3){
    // circulo 
    let r = parseInt(prompt("¿Cuál es el radio del cículo?"))
    p = 2 * 3.14159 * r
    area = 3.14159 * (r*r)
    document.write("El perímetro del círculo es: " + p  + " El área del círculo es: " + area)
    
}

else {
    document.write("Ingrese 1 para un rectángulo, 2 para un cuadrado y 3 para un círculo.")
  
}