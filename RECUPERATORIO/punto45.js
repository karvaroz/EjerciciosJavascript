let vector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let primos = [];
let noSonPrimos = [];
let factorial;
let factorialTotal = 1;
let j = 1;
const primo = (numero) => {

    for (var i = 2; i < numero; i++) {

        if (numero % i === 0) {
            return false;
        }

    }

    return numero !== 1;
}

for (j; j < vector.length; j++) {

    if (primo(vector[j])) {
        primos.push(vector[j]);
        factorial = vector[j] * vector[j + 1];
        factorialTotal = factorialTotal * factorial;
    } else {
        noSonPrimos.push(vector[j]);
    }

}



console.log("Los números primos son: " + primos);

console.log("Los números que no son primos son: " + noSonPrimos);

console.log("El factorial de los némero primos es: " + factorialTotal + '\n');

document.write("Ver consola");
