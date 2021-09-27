
tam = parseInt(prompt("Ingrese el tamaño del vector"))

let vector = new Array(tam);

for(i = 0; i <= tam; i++){
    vector[i] = Math.round(Math.random()*100)
    if (vector[i]%2==0 && i%2!=0){
        alert(vector[i] + " esta en la posición " + i)
    }
}