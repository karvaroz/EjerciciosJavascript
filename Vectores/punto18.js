
let m1 = [[10,3],[55,1]]; 
let m2 = [[5,2],[45,2]];
let m3 = [];

if (m1.length != m2.length) {
	document.write("No se pueden sumar estas matrices");
} else{
	for (let i=0; i < m1.length; i++) {
		let auxiliar = [];
		for (let j=0; j< m1[i].length; j++) {
			auxiliar.push(m1[i][j] + m2[i][j]);
		}
		m3.push(auxiliar);
	}
}
for(let i=0;i<m3.length;i++){
	document.write(m3[i] + "<br>");
}