//Ejercicio edades 
let edades =[] //Asi tambien se pueden declarar arreglos
let edad =(parseInt(prompt("Ingrese la edad")))
let indice = 0;
let sumaEdades = 0;
let promedio;
while(edad!=0){
    edades[indice] = edad;
    edad =(parseInt(prompt("Ingrese la edad")))
    sumaEdades = sumaEdades + edades[indice]
    indice++;
    

}
promedio = sumaEdades/edades.length //length me puede decir el tamaño del arreglo
alert(promedio)

