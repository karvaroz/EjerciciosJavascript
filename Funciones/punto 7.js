let cadenatexto = prompt("ingrese una frase")
const numero = parseInt("ingrese un numero que sirve como costante ")
function validarcadenacaracteres(cadenatexto,numero ){
    var totalcaract = cadenatexto.length
  if (totalcaract>numero){
    return false
 }else{
     return true
 }
    
}
alert(validarcadenacaracteres(cadenatexto,numero))

