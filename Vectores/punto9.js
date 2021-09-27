// Declaración

let ventasDiaria = [];
let suma=0;

// Proceso


for(let i=0; i<4; i++){            //Acá debería ingresar las ventas 
	alert("Semana " + (i+1)); 
	let lista = [];
	for (let j=0; j<7; j++) {
		lista.push(parseInt(prompt("Ingrese las ventas del día " + (j+1))));
	}
	ventasDiaria.push(lista);
} 

for(let i=0; i<ventasDiaria.length;i++){   // Suma las ventas de cada semana
	for(let j=0; j<7; j++){
		suma += ventasDiaria[i][j]; 
	}
}

// Salida

let promedio = suma/28;
if (promedio>10000) {
	document.write("Promedio es mayor a 10.000, Ventas de la primera semana " + ventasDiaria[0]); // como se podría sumar los elementos de esta fila?
}else if(promedio<10000){
	document.write("Promedio es menor a 10.000, Ventas de la última semana " + ventasDiaria[ventasDiaria.length-1]);
}

