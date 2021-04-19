// funcion para registrar usuarios
function CrearUsuario(){
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var usuario = document.getElementById("usuario");
    alert(nombre.value).getElementById("contraseña");
    }

function IniciarSesion(){
    var user= document.getElementById("luser");
    var pass= document.getElementById("lcontraseña")

    if(user.value=="admin" && pass.value=="1234"){
        window.location.href='../inicio_admin.html'       
    }else{
        alert('Usuario y/o contraseña incorrectos')
        pass.value='';
        user.value='';
    }
}
