// Divisores de cualquier número

let n = parseInt(prompt('Ingrese un número'));


for (let i =1; i <=n; i++){
    if (n % i == 0){
        document.write(`Los divisores de ${n} son: ${i}` + "<br>")
    }

}