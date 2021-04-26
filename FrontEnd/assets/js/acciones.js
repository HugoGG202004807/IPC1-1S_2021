//tabla de los pacientes  actualizacion
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
                            <a href="#" class="edit" title="Editar" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                            <a href="#" class="delete" title="Eliminar" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                        </td>
                
                </tr>
                `
    }
    text2+=`</tbody>
            </table>`
    document.getElementById("tablausers").innerHTML = text2;
});


//tabla de los doctores  actualizacion
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
                            <a href="#" class="edit" title="Editar" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                            <a href="#" class="delete" title="Eliminar" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                        </td>
                
                </tr>
                `
    }
    text3+=`</tbody>
            </table>`
    document.getElementById("tablamedico").innerHTML = text3;
});

//tabla de las enfermeras  actualizacion
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
                            <a href="#" class="edit" title="Editar" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                            <a href="#" class="delete" title="Eliminar" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
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
                            <a href="#" class="edit" title="Editar" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                            <a href="#" class="delete" title="Eliminar" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                        </td>
                
                </tr>
                `
    }
    text5+=`</tbody>
            </table>`
    document.getElementById("tablamedicamento").innerHTML = text5;
});