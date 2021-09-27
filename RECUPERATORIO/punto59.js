/* 
59. Dado el array [1,2,3,4,5,6] realice las siguientes operaciones:
a) Iterar todos los elementos del array utilizando for y mostrarlos en pantalla.
b) Iterar todos los elementos del array utilizando while y mostrarlos en pantalla.
c) Iterar todos los elementos del array utilizando for..of y mostrarlos en pantalla.
d) Mostrar todos los elementos del array pero sumándole 1 a cada uno.
e) Calcule el promedio de los datos que se encuentran en el array.
*/

let vector= [1,2,3,4,5,6];

function for59(vec) {
    for (let i = 0; i < vec.length; i++) {
        vec[i];
    }
    console.log(vec);
    return suma(vec);
}

function while59(vec) {
    let i=0;
    while(i < vec.length){ 
        vec[i];
        i++;
    }
    console.log(vec);
    return suma(vec);
}

function forOf59(vec) {
    for (const i of vec) {
        vec;
    }
    console.log(vec);
    return suma(vec);
}

function suma(vector) {
        let cout=0;
        let suma=0;
        for (let i = 0; i < vector.length; i++) {
            suma+=vector[i];
            cout++;
        }
        return"Suma: "+suma;
        promedio(suma, cout);
        
}

function promedio(suma, num) {
    var promedio = suma / num;
    console.log("Promedio: "+promedio.toFixed(2));
}

console.log("For");
console.log(for59(vector));
console.log("While");
console.log(while59(vector));
console.log("For of");
console.log(forOf59(vector));
