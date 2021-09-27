function saludo (nom1, nom2) {
  alert ("bienvenidos a colombia"+ " " + nom1 + " y " + nom2)

}
 
let nom1 =prompt ("ingrese el nombre del primer turista ")
let nom2 = prompt ("ingrese el nombre del segundo turista ")

saludo (nom1,nom2)


let numero = parseInt(prompt("ingrese un numero "))
function validarnumero(numero){
  if (num<0)
    return false
 else 
   return true
  
}
if (validarnumero(numero)){
  alert (" es positivo ")
}else{
  alert( " es negativo ")
} 
