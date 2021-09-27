// ARREGLO UNIDIMENSIONAL SE LE LLAMA VECTOR, PUEDE TENER UN TAMAÑO FIJO
// O NO, DEPENDIENDO DE COMO SE DECLARE. 
//Ejercicio 1 de taller arreglos

//let vector = new Array (5)
//for(var i=0; i<5; i++){
//    vector [i] = Math.round(Math.random()*100); 
//    document.write(vector[i] + " ")
//    //alert(vector[i]);
//    if(vector[i]%2==0){
//        alert("Número Par " + vector[i])
//   }
//}

//let vector = [];
//let i=0;
//let respuesta = true;
//do {
//    vector[i] = Math.round(Math.random()*100);
//    document.write(vector[i] + " ")
//    if(vector[i]%2==0){
//        alert("Número Par " + vector[i])
//    }
//    i++;
//    respuesta = Boolean(prompt("Desea generar un nuevo número (true / false)."))
//}while(respuesta==true)
//alert(vector.length)

//let otrovector = [];
//let respuesta = true;
//while(respuesta==true){
//    otrovector.push (prompt("Ingrese nombre del producto"))
//    respuesta = Boolean(prompt("Desea ingresar otro producto (true / false)."))
//} 
//for (var i=0; i<otrovector.length; i++){
//    document.write(otrovector[i] + <br>);
//
//}


let vector = [];
let i=0;
let respuesta = true;
let contpares =  0, contimpares = 0;
do {
    vector[i] = Math.round(Math.random()*100);
    document.write(vector[i] + " ")
    if(vector[i]%2==0){
        alert("Número Par " + vector[i])
        contpares++;
   } else {
    alert("Número Impar " + vector[i])
    contimpares++;
}
    i++;
    respuesta = Boolean(prompt("Desea generar un nuevo número (true / false)."))
}while(respuesta==true)
alert(vector.length)
