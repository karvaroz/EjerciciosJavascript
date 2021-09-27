// let tam = parseInt(prompt("Cúal es el tamaño del vector"))
// let vector = new Array(tam)
// for(var i=0; i<vector.length; i++){
//     vector[i] = Math.round(Math.random()*100);
//     document.write(vector[i] + " ")
//     if (vector[i]%2==0){
//         alert("Número Par " + vector[i])
//     }
// }

let vector = [];
let i=0;
let respuesta=true;
let contpares=0, contimpares=0;
do{
   vector[i] = Math.round(Math.random()*100);

   if (vector[i]%2==0){
         alert("Número Par " + vector[i])
         contpares++;
   }else{
        alert("Número Impar " + vector[i])
        contimpares++
   }
   document.write(vector[i] + " ")
   i++;
   respuesta = Boolean(prompt("Desea generar un nuevo numero (true/false)"))
}while(respuesta==true)
alert("La cantidad de numeros del vector es: " + vector.length)
alert("La cantidad de numeros pares es: " + contpares)
alert("La cantidad de numeros impares es: " + contimpares)

// let otrovector = []
// let respuesta = true;
// while(respuesta==true){
//     otrovector.push(prompt("Ingrese nombre del producto"));
//     respuesta = Boolean(prompt("Desea ingresar otro producto (true/false)"))
// }

// for (var i=0; i<otrovector.length; i++){
//     document.write(otrovector[i] + "<br>")
// }