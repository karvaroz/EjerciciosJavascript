// Declaración

let suma=0;
let n = parseInt(prompt("¿Cuantos estudiantes ingresará?"));
let matriz = new Array(n);

// Proceso

for(let i=0;i<n;i++){
	matriz[i]= new Array(4);
}
for(let i=0; i<n; i++){
	for(let j=0; j<4 ; j++){
		if (j==0) {
			matriz[i][j] = prompt("Nombre");
		}else{
			matriz[i][j] = parseFloat(prompt("Nota " + j));
		}
	}
}


//Salida

for (let i=0; i<matriz.length; i++) {
	for(let j = 1; j<4 ;j++){
		suma+=matriz[i][j];
	}
	if ((suma/3) < 3) {
		document.write("El estudiante " + matriz[i][0] + " ha reprobado la materia." + "<br>");
	}else if ( (suma/3) >= 3){
		document.write("El estudiante " + matriz[i][0] + " ha aprobado la materia." + "<br>");
	}
}