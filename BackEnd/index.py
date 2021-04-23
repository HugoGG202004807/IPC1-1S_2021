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
    return 'SERVER IS WORKING !!!'

@app.route('/obtenermedicamentos')
def obtenermedicamentos():
    return gestor.obtener_medicamento()

@app.route('/obtenerpasientes')
def obtenerpasientes():
    return gestor.obtener_pasiente()

@app.route('/pasiente', methods=['POST'])
def crearpasiente():
    dato = request.json
    gestor.crearMedicamento(dato['nombre'],dato['precio'],dato['descripcion'],dato['cantidad'])
    return '{"Estado":"Medicamento Creado"}'

#INICIAR EL SERVIDOR 

if __name__== "__main__":
    app.run(host="0.0.0.0", debug=True)

