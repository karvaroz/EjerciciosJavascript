let contraseña = prompt("Ingrese la contraseña")

let cantCarac = contraseña.length

let mayusculas=0

let minusculas =false

let numeros=0

let caractEsp = false

for (let i=0; i<contraseña.length; i++){

    if(contraseña.charCodeAt(i)>=65 && contraseña.charCodeAt(i)<=90){

        mayusculas++

    }else if(contraseña.charCodeAt(i)>=48 && contraseña.charCodeAt(i)<=57){

        numeros++

    }else if(contraseña.charCodeAt(i)>=97 && contraseña.charCodeAt(i)<=122){

        minusculas=true

    }else {

         caractEsp=true

    }

}

if (mayusculas>=2 && numeros>=3 && caractEsp==true){

    alert("Contraseña ok")

}else{

    alert("Verifique minimo 2 mayusculas, 3 numeros y un caracter #/*")

}