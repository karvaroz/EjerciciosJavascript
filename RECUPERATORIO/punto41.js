let listaNotasEva = [];
let n = parseInt(prompt('¿Cuántos números va a ingresar dentro del arreglo para evaluar la media del conjunto?'));
for ( let i = 1; i <= n; i++){
    let numeros = parseInt(prompt('Ingrese un número'))
    listaNotasEva.push(numeros)
}
listaNotasEva.sort((a, b) => a - b);
let mediaBaja = Math.floor((listaNotasEva.length - 1) / 2);
let mediaAlta = Math.ceil((listaNotasEva.length - 1) / 2);
let media = (listaNotasEva[mediaBaja] + listaNotasEva[mediaAlta]) / 2;
document.write(media)