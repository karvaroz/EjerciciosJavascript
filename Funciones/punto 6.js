let cadenatexto = prompt ("ingrese una frase ")
function validarcadenatexto(cadena) {
    if (cadena==cadena.touppercase()){
        mensaje = "solo mayusculas"
    }else{
        mensaje = "se compone de mayuscula y minusculas"

    }
    return mensaje
}
alert(validarcadenatexto(cadenatexto))