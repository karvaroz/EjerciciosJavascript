var matriz1 = [[],[],[]]
var matriz2 = [[],[],[]]
var matriz3 = [[],[],[]]
var sumaNumeros=0;
llenarMatrices(matriz1,matriz2)
function llenarMatrices(matriz1,matriz2){
    for(let f=0; f<matriz1.length; f++){
        for(let c=0; c<matriz2.length; c++){  
           matriz1[f][c]=parseInt(prompt("Ingrese un numero para la matriz1"))
           matriz2[f][c]=parseInt(prompt("Ingrese un numero para la matriz2"))
        }
      }

}
console.log(matriz1)
console.log(matriz2)

//Menú de Opciones
var opcion = parseInt(prompt("Menu de Opciones \n 1. Sumar Matrices \n 2.Promedio Matriz Resultante"))
if (opcion==1){
  console.log(sumarMatrices(matriz1,matriz2))
}else if(opcion==2){
  console.log(sumarMatrices(matriz1,matriz2))
  console.log(promediarMatrizResultante(matriz3))
}

