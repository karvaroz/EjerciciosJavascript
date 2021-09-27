let vectorUsuarios = ["andres2020","hernan54", "felipe350"]
let respuesta = false;
let usuario;
let charNumeros = false;
let contNumeros = 0
do{
  usuario = prompt("Ingrese un usuario") 
  while(vectorUsuarios.includes(usuario)){
    usuario = prompt("Ingrese un usuario")
  }
  //let cant = usuario.length

  for (let i=0; i<usuario.length; i++){
      if (!isNaN(usuario[i])){
         contNumeros++
      }
  }
  if (contNumeros>=2){
     vectorUsuarios.push(usuario) 
     alert("Usuario se insertó con Exito")
     contNumeros=0
  }else{
      alert("El usuario debe tener minimo dos numeros")
  }
  respuesta = Boolean(prompt("Desea ingresar otro usuario (true/false)"))
}while(respuesta);
console.log(vectorUsuarios)
