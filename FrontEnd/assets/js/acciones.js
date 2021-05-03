  
//Declaracion de Headers

let headers = new Headers()
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Access-Control-Allow-Origin', 'http://34.67.203.10:5000');
headers.append('Access-Control-Allow-Credentials', 'true');
headers.append('GET', 'POST', 'OPTIONS','PUT','DELETE');

function cargar(){
    let file = document.getElementById("carga").files[0];
    if (file) {
        let reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = function (evt) {
            let cuerpo = {
                data:evt.target.result
            }

            console.log(JSON.stringify(cuerpo))
            fetch('http://localhost:5000/carga', {
            method: 'POST',
            headers,
            body: JSON.stringify(cuerpo),
            })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);
                
            })
            .catch(error => {
                console.error('Error:', error);
            });

        }
        reader.onerror = function (evt) {
            
        }
    }
}



//tabla de los pacientes  actualizacion
document.getElementById("tablausers").innerHTML = "";
let text2=""
text2 = `<table class="table" style="margin=10px">
<thead>
<tr>
<th scope="col">#</th>
<th scope="col">Nombre</th>
<th scope="col">Apellido</th>
<th scope="col">Opciones</th>

</tr>
</thead>
<tbody>`

fetch('http://localhost:5000/obtenerpacientes')
.then(response => response.json())
.then(data =>{
    var i;
    for(i=0;i<data.length;i++){
        text2+= `

            
                <tr>
                <th scope="row">${i+1}</th>
                
                <td>${data[i].nombre}</td>
                <td>${data[i].apellido}</td>
              

                <td>
                            <a href="#" class="view" title="Ver" data-toggle="tooltip"><i class="material-icons">&#xE417;</i></a>
                            <a href="../FrontEnd/actuliazar/index.html" class="edit" title="Editar" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                            <button href="#"   class="delete" onclick="eliminarpaciente('${data[i].nombre}', '${data[i].apellido}')" title="Eliminar" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></button>
                        </td>
                
                </tr>
                `
    }
    text2+=`</tbody>
            </table>`
    document.getElementById("tablausers").innerHTML = text2;
});

//tabla de los doctores  actualizacion

document.getElementById("tablamedico").innerHTML = "";
let text3=""
text3 = `<table class="table" style="margin=10px">
<thead>
<tr>
<th scope="col">#</th>
<th scope="col">Nombre</th>
<th scope="col">Apellido</th>
<th scope="col">Especialidad</th>
<th scope="col">Opciones</th>

</tr>
</thead>
<tbody>`

fetch('http://localhost:5000/obtenerdoctores')
.then(response => response.json())
.then(data =>{
    var i;
    for(i=0;i<data.length;i++){
        text3+= `

            
                <tr>
                <th scope="row">${i+1}</th>
                
                <td>${data[i].nombre}</td>
                <td>${data[i].apellido}</td>
                <td>${data[i].especialidad}</td>
              

                <td>
                            <a href="#" class="view" title="Ver" data-toggle="tooltip"><i class="material-icons">&#xE417;</i></a>
                            <a href="../FrontEnd/actuliazar/index.html" class="edit" title="Editar" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                            <button href="#"   class="delete" onclick="eliminardoctor('${data[i].nombre}', '${data[i].apellido}')" title="Eliminar" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></button>
                        </td>
                
                </tr>
                `
    }
    text3+=`</tbody>
            </table>`
    document.getElementById("tablamedico").innerHTML = text3;
});

//tabla de las enfermeras  actualizacion

document.getElementById("tablaenfermera").innerHTML = "";
let text4=""
text4 = `<table class="table" style="margin=10px">
<thead>
<tr>
<th scope="col">#</th>
<th scope="col">Nombre</th>
<th scope="col">Apellido</th>
<th scope="col">Opciones</th>

</tr>
</thead>
<tbody>`

fetch('http://localhost:5000/obtenerenfermeras')
.then(response => response.json())
.then(data =>{
    var i;
    for(i=0;i<data.length;i++){
        text4+= `

            
                <tr>
                <th scope="row">${i+1}</th>
                
                <td>${data[i].nombre}</td>
                <td>${data[i].apellido}</td>
                
                <td>
                            <a href="#" class="view" title="Ver" data-toggle="tooltip"><i class="material-icons">&#xE417;</i></a>
                            <a href="../FrontEnd/actuliazar/index.html" class="edit" title="Editar" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                            <button href="#"   class="delete" onclick="eliminarenfermera('${data[i].nombre}', '${data[i].apellido}')" title="Eliminar" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></button>
                        </td>
                
                </tr>
                `
    }
    text4+=`</tbody>
            </table>`
    document.getElementById("tablaenfermera").innerHTML = text4;
});

//tabla de los medicamentos  actualizacion
let text5=""
text5 = `<table class="table" style="margin=10px">
<thead>
<tr>
<th scope="col">#</th>
<th scope="col">Nombre</th>
<th scope="col">Cantidad</th>
<th scope="col">Opciones</th>

</tr>
</thead>
<tbody>`

fetch('http://localhost:5000/obtenermedicamentos')
.then(response => response.json())
.then(data =>{
    var i;
    for(i=0;i<data.length;i++){
        text5+= `

            
                <tr>
                <th scope="row">${i+1}</th>
                
                <td>${data[i].nombre}</td>
                <td>${data[i].cantidad}</td>
                
                <td>
                
                            <a href="#" class="view" title="Ver" data-toggle="tooltip"><i class="material-icons">&#xE417;</i></a>
                            <a href="../FrontEnd/actuliazar/index.html" class="edit" title="Editar" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                            <button href="#"   class="delete" onclick="eliminarmedicamento('${data[i].nombre}')" title="Eliminar" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></button>
                        </td>
                
                </tr>
                `
    }
    text5+=`</tbody>
            </table>`
    document.getElementById("tablamedicamento").innerHTML = text5;
});

// eliminar paciente
function eliminarpaciente( nombre, apellido){
    console.log(  nombre, apellido)
    
    fetch('http://localhost:5000/pacientes/'+nombre+'/'+apellido,{
        method:'DELETE'
    })
    .then(res => res.text())
    .then(res=> {
        alert(res)
       
    })
    
}
// eliminar doctor
function eliminardoctor( nombre, apellido){
    console.log(  nombre, apellido)
    
    fetch('http://localhost:5000/doctores/'+nombre+'/'+apellido,{
        method:'DELETE'
    })
    .then(res => res.text())
    .then(res=> {
        alert(res)
       
    })
    
}
// eliminar enfermera
function eliminarenfermera( nombre, apellido){
    console.log(  nombre, apellido)
    
    fetch('http://localhost:5000/enfermeras/'+nombre+'/'+apellido,{
        method:'DELETE'
    })
    .then(res => res.text())
    .then(res=> {
        alert(res)
       
    })
    
}
// eliminar medicamento
function eliminarmedicamento( nombre){
    console.log(  nombre)
    
    fetch('http://localhost:5000/medicamentos/'+nombre,{
        method:'DELETE'
    })
    .then(res => res.text())
    .then(res=> {
        alert(res)
       
    })
    
}