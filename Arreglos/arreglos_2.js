let cantidad = parseInt(prompt("¿Cúal es el tamaño del vector"));
let vector = new Array (cantidad)
for(var i=0; i<vector.length; i++){
    vector [i] = Math.round(Math.random()*100); 
    document.write(vector[i] + " ")
    //alert(vector[i]);
    if(vector[i]%2==0){
        alert("Número Par " + vector[i])
    }
}