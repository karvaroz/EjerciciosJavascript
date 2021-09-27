let listaDatos = [];

let n = parseInt(prompt('¿Cuántos números va a ingresar dentro de cada conjunto de numeros?'));

for ( let i = 0; i < n; i++){
    let numero = parseInt(prompt('Ingrese un número'));
    listaDatos.push(numero);
}

alert("vas a ingresar el siguiente conjunto atento");

let listaDatosDos = [];

for ( let i = 0; i < n; i++){
    let numero = parseInt(prompt('Ingrese un número'));
    listaDatosDos.push(numero);
}

document.write(sumaConjuntos(listaDatos, listaDatosDos)+"total de la suma de los conjuntos")

function sumaConjuntos (list1, list2){
    total=[]
    for(i=0; i<n; i++){
        total.push(list1[i]+list2[i]) 
    }
    return total
}