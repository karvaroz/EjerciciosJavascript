// Punto 2 del taller funciones 2
// codigo ASCII
// charCodeAt

let contraseña = prompt("Ingrese su contraseña");
let cantCon = contraseña.length
let mayusculas = 0;
let numeros = 0;
let caracterEsp = false;

for (let i = 0; i < contraseña.length; i++){
    if (contraseña.charCodeAt(i) >= 65 && contraseña.charCodeAt (i) <= 90 ){
        mayusculas++;
    } else if (contraseña.charCodeAt(i) >= 48 && contraseña.charCodeAt (i) <= 57) {
        numeros++;
    } else if (contraseña.charCodeAt(i) == 35 || contraseña.charCodeAt(i) == 42) {
        caracterEsp = true;

    } 
}
if (mayusculas>= 2 && numeros >=3  && caracterEsp == true) {
    alert("La contraseña cumple con los requerimientos.")
} else {
    alert("Verifique que la contraseña cumple con los requerimientos.")
}