    //Declaracion de Headers

let headers = new Headers()
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Access-Control-Allow-Origin', 'http://localhost:5000');
headers.append('Access-Control-Allow-Credentials', 'true');
headers.append('GET', 'POST', 'OPTIONS','PUT','DELETE');


// funcion para registrar usuarios
function CrearPaciente(){
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var nacimiento = document.getElementById("nacimiento");
    var genero = document.getElementById("genero");
    var usuario = document.getElementById("usuario");
    var contraseña = document.getElementById("contraseña");
    var telefono = document.getElementById("telefono");
    
    if(nombre.value=='' ){
        alert('Debe llenar todos los campos')
        return        
    }
    if(apellido.value=='' ){
        alert('Debe llenar todos los campos')
        return
    }
    if(nacimiento.value=='' ){
        alert('Debe llenar todos los campos')
        return
    }
    if(genero.value=='' ){
        alert('Debe llenar todos los campos')
        return
    }
    if(usuario.value=='' ){
        alert('Debe llenar todos los campos')
        return
    }
    if(contraseña.value=='' ){
        alert('Debe llenar todos los campos')
        return
    }

    //Aca realizamos la peticion
    fetch('http://localhost:5000/registro',
    {
        method:'POST',
        headers,
        // El cuerpo, es decir los valores que vamos a mandar
        body: `{
                "nombre":"${nombre.value}",
                "apellido":"${apellido.value}",
                "nacimiento":"${nacimiento.value}",
                "genero":"${genero.value}",
                "usuario":"${usuario.value}",
                "contraseña":"${contraseña.value}",
                "telefono":"${telefono.value}"
                
                }`
    })
    .then(response => response.json())
    .then(
        result => {
            console.log('Success:', result);
            nombre.value=''
            apellido.value=''
            nacimiento.value=''
            genero.value=''
            usuario.value=''
            contraseña.value=''
            telefono.value=''
            alert('Usuario Creado')
          }
    )
    .catch(
        error => {
            console.error('Error:', error);
            nombre.value=''
            apellido.value=''
            nacimiento.value=''
            genero.value=''
            usuario.value=''
            contraseña.value=''
            telefono.value=''
            alert('Hubo un error creando usuario')
          }
    )

}

    

function IniciarSesion(){
    let user= document.getElementById("luser");
    let pass= document.getElementById("lcontraseña")

    fetch(`http://localhost:5000/login/${user.value}/${pass.value}`)
    .then(response => response.json())
    // Manejando la data
    .then(data => {
        console.log(data.nombre)
        if(data.nombre=="false"){
            alert('Verifique sus Credenciales')
            pass.value='';
            usuario.value='';
        }else{
            alert(`Bienvenido ${data.nombre}`)
            window.location.href='../inicio_admin.html'
        }

     
   
  /*  if(user.value=="admin" && pass.value=="1234"){
        window.location.href='../inicio_admin.html'       
    }else{
        alert('Usuario y/o contraseña incorrectos')
        pass.value='';
        user.value='';
    }*/
}
    )}
    

