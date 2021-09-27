let listaNotasEva = [];
let n = parseInt(prompt('¿Cuántos números va a ingresar dentro del conjunto?'));
for ( let i = 1; i <= n; i++){
    let numero = parseInt(prompt('Ingrese un número'))
    listaNotasEva.push(numero)
}
let divisible =parseInt(prompt("porque numero quieres evaluar el conjunto para saber si son divisiblevisibles por el numero que ingreses"))
const numdivisiblevisibles = listaNotasEva.filter(numeros => {
    return numeros % divisible==0
})
document.write("los numeros divisiblevisibles por "+divisible+" son: "+numdivisiblevisibles)

