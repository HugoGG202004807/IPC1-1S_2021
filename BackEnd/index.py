#importaciones de Flask
from flask import Flask, request, jsonify
from flask_cors import CORS
from Gestor import Gestor

#crear la app
app= Flask(__name__)
app.config["DEBUG"]=True
CORS(app)
gestor= Gestor()

# EndPoints
@app.route('/',methods=['GET'])
def home():
    return 'HUGO SI LE SABE AL SHIT POST !!!'

@app.route('/obtenermedicamentos')
def obtenermedicamentos():
    return gestor.obtener_medicamento()

@app.route('/obtenerpacientes')
def obtenerpacientes():
    return gestor.obtener_paciente()

@app.route('/obtenerdoctores')
def obtenerdoctores():
    return gestor.obtener_doctor()

@app.route('/obtenerenfermeras')
def obtenerenfermeras():
    return gestor.obtener_enfermera()

@app.route('/medicamentos', methods=['POST'])
def crearmedicamento():
    dato = request.json
    gestor.crearMedicamento(dato['nombre'],dato['precio'],dato['descripcion'],dato['cantidad'])
    return '{"Estado":"Medicamento Creado"}'

@app.route('/pacientes', methods=['POST'])
def crearpaciente():
    dato = request.json
    gestor.crearPaciente(dato['nombre'],dato['apellido'],dato['nacimiento'],dato['genero'],dato['usuario'], dato['contraseña'],dato['telefono'])
    return '{"Estado":"Paciente Creado"}'

@app.route('/medicamentos/<nombre>', methods=['DELETE'])
def eliminar_medicamento(nombre):
    if(gestor.eliminar_medicamento(nombre)):
        return '{"data":"Medicamento eliminado"}'
    return '{"data":"Error"}'

@app.route('/pacientes/<nombre>/<apellido>', methods=['DELETE'])
def eliminar_paciente(nombre, apellido):
    if(gestor.eliminar_paciente(nombre, apellido)):
        return '{"data":"Paciente eliminado"}'
    return '{"data":"Error"}'

@app.route('/doctores/<nombre>/<apellido>', methods=['DELETE'])
def eliminar_doctor(nombre, apellido):
    if(gestor.eliminar_doctor(nombre, apellido)):
        return '{"data":"Doctor eliminado"}'
    return '{"data":"Error"}'

@app.route('/enfermeras/<nombre>/<apellido>', methods=['DELETE'])
def eliminar_enfermera(nombre, apellido):
    if(gestor.eliminar_enfermera(nombre, apellido)):
        return '{"data":"Enfermera eliminada"}'
    return '{"data":"Error"}'

@app.route('/medicamentos/<nombre>',methods=['PUT'])
def actualizarmedicamento(nombre):
    dato = request.json
    if gestor.actualizar_medicamentos(nombre,dato['nombre'],dato['precio'],dato['descripcion'],dato['cantidad']):
        return '{"data":"Actualizado"}'
    return '{"data":"Error"}'

@app.route('/pacientes/<nombre>',methods=['PUT'])
def actualizarpaciente(nombre):
    dato = request.json    

    if gestor.actualizar_pacientes(nombre,dato['nombre'],dato['apellido'],dato['nacimiento'],dato['genero'],dato['usuario'], dato['contraseña'],dato['telefono']):
        return '{"data":"Actualizado"}'
    return '{"data":"Error"}'
       
@app.route('/login/<user>/<password>')
def login(user,password):
    print('entra')
    return gestor.iniciar_sesion(user,password)

@app.route('/registro',methods=['POST'])
def registrar():
    dato = request.json
    gestor.registrar_paciente(dato['nombre'],dato['apellido'],dato['nacimiento'],dato['genero'],dato['usuario'], dato['contraseña'],dato['telefono'])    
    return '{"data":"Creado"}'

@app.route('/carga',methods=['POST'])
def carga():
    dato = request.json
    gestor.cargamasiva(dato['data'])
    return '{"data":"Cargados"}'






#INICIAR EL SERVIDOR 

if __name__== "__main__":
    app.run(host="0.0.0.0", debug=True)

