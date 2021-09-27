

let figura = parseInt(prompt(' 1 = rectangulo, 2 = cuadrado, 3 = circulo'));

if (figura == 1){

// Rectangulo

let base = parseFloat(prompt('Ingrese la base'));

let altura = parseFloat(prompt('Ingrese la altura'));

let area = base * altura;

let perimetro = (altura * 2) + (base * 2)

document.write(`el area es: ${area}`+ "<br>"); 

document.write(`el perimetro es: ${perimetro}`);


} else if (figura == 2){

// Cuadrado             

let lado = parseFloat(prompt('Ingrese medida del lado'));

let perimetro = lado * 4;

let area = lado ** 2;

document.write(`el area es: ${area}`+ "<br>"); 

document.write(`el perimetro es: ${perimetro}`);


} else if (figura == 3){

// Circulo 

let radio = parseFloat(prompt('Ingrese el radio'));

let perimetro = 2 * Math.PI * radio;

let area = Math.PI * (radio**2);

document.write(`el area es: ${area}`+ "<br>"); 

document.write(`el perimetro es: ${perimetro}`);

} else {

    alert('Para calcular el area y perimetro de una figura debe ingresar: 1 = rectangulo, 2 = cuadrado, 3 = circulo')
}



