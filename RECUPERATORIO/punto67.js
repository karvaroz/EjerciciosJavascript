// let contraseña = prompt("Ingrese la contraseña")

// let cantCarac = contraseña.length

// let mayusculas=0

// let minusculas =false

// let numeros=0

// let caractEsp = false

// for (let i=0; i<contraseña.length; i++){

//     if(contraseña.charCodeAt(i)>=65 && contraseña.charCodeAt(i)<=90){

//         mayusculas++

//     }else if(contraseña.charCodeAt(i)>=48 && contraseña.charCodeAt(i)<=57){

//         numeros++

//     }else if(contraseña.charCodeAt(i)>=97 && contraseña.charCodeAt(i)<=122){

//         minusculas=true

//     }else {

//          caractEsp=true

//     }

// }

// if (mayusculas>=2 && numeros>=3 && caractEsp==true){

//     alert("Contraseña ok")

// }else{

//     alert("Verifique minimo 2 mayusculas, 3 numeros y un caracter #/*")

// }

// // falta


let nombre = prompt("Ingrese su nombre");

while (true) {
    if (nombre.length > 3) {
        numeroCaracteres(nombre)
        break
    } else {
        nombre = prompt("debe ser mayor a tres caracteres")
    }
}

function numeroCaracteres(string) {
    var salida = '';
    //Se añaden las letras invalidas
    var caracterInvalido = '-;:.,[]{}^+´~*´¨#!°°||/""%&()=!$@QWERTYUIOPASDFGHJKLÑZXCVBNM';

    for (var i = 0; i < string.length; i++)
        if (caracterInvalido.indexOf(string.charAt(i)) != -1)
            salida += string.charAt(i);

    if (salida != '') {
        alert("caracteres inválidos")
        while (true) {
            var n = prompt("Ingrese su nombre");
            if (n.length > 3) {
                numeroCaracteres(n)
            } else {
                nombre = alert("Debe ser mayor a tres caracteres")
            }
        }
    } else if (salida == '') {
        return alert("NO contiene caracteres invalidos ")
    }
}