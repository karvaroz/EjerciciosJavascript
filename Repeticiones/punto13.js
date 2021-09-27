// instrucción break
// Se detiene un bucle utilizando la palabra break.

for (i=0;i<10;i++){ 
    document.write (i) 
    escribe = prompt("dime si continuo preguntando...", "si") 
    if (escribe == "no") 
       break 
}

// instrucción continue
// Sirve para volver al principio del bucle en cualquier momento

var i=0 
while (i<7){ 
   	incrementar = prompt("La cuenta está en " + i + ", dime si incremento", "si") 
   	if (incrementar == "no") 
      	continue 
   	i++ 
}