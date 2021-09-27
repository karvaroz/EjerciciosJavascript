const passRegistrado = "1234";

let intentos = 3

for (i = 0; i < 3; i++) {

    let contraseñas = prompt('Ingrese su contraseña')

    if (passRegistrado == contraseñas) {

        alert('Inicio seseón.')
        break
        
    } else {

        alert("contraseña incorrecta te quedan " + intentos-- +" intentos" )
    
        if (intentos == 0) {
          
            alert('se agotaron los intentos. Máx 3')
            break
        }
    }
}