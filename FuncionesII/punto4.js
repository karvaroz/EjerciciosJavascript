let figura = prompt ("¿Qué figura desea analizar?");

function circulo (radio) {
    let area = Math.PI * radio**2;
    let perimetro =  Math.PI * radio*2
    console.log("El área es " + area) 
    console.log("El perimetro es " + perimetro) 
}

function cuadrado (lado) {
    let area = lado * lado
    let perimetro = 4 * lado
    console.log("El área es " + area) 
    console.log("El perimetro es " + perimetro)
}

function triangulo (angulo) {
    let altura = prompt("ingrese la altura")
    let base = prompt("Ingrese la base")
    
}