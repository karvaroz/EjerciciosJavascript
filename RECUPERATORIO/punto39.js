var numerosVector = [];
let n = parseInt(prompt('¿Cuántos números va a ingresar dentro del arreglo?'));
for ( let i = 1; i <= n; i++){
    let numeros = parseInt(prompt('Ingrese un número'))
    numerosVector.push(numeros)
}
const paresVector = numerosVector.filter(numeros => {
    return numeros %2==0
})
document.write(paresVector.sort((a, b) => a - b))
const arrayNoPares = numerosVector.filter(numeros => {
    return numeros %2!=0
})
console.log(arrayNoPares.sort(function (b, a){
    return b - a;
}))
const alreves = arrayNoPares.reverse();
document.write("<br/>"+alreves);