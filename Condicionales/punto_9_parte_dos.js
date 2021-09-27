//parte dos
// funciona
// no se si funcionan en conjunto

let diametro = parseFloat(prompt("Ingrese el diámetro de una rueda"));
let grosor = parseFloat(prompt("Ingrese el grosor de una rueda en metros"));


if (diametro > 1.4 && grosor < 0.4 || diametro > 0.8 && diametro <= 1.4 || grosor <0.25  ){
    alert("El grosor para esta rueda es inferior al recomendado.")
}
else {
    alert("Estos parámetros no fueron especificados.")
}