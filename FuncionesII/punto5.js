
var usuarios = ["juan40","pedro40","hernesto20"];

var contraseñas = ["qwer22", "dsfa40", "aaaa20"]; 


function solicitarInfo(usuarios) {

    let entrada = prompt("Ingrese su usuario registrado en el sistema")

    for(let i=0; i<usuarios.length; i++){
        
        if (entrada == usuarios[i]){
            
            return true;

        } else { return false}
    } 
    
}

function solicitarInfo2(contraseñas) {

    let entrada = prompt("Ingrese su contraseña")
    
    for(let i=0; i<contraseñas.length; i++){
        
        if (entrada == contraseñas[i]){
            
            return true;

        } else { return false}
    } 
    
}
solicitarInfo(usuarios);

solicitarInfo2(contraseñas);

console.log(solicitarInfo(usuarios));

console.log(solicitarInfo2(contraseñas));

