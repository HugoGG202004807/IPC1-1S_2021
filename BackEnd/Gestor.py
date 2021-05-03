from Pacientes import Paciente
from Medicamentos import Medicamento
from Doctores import Doctor
from Enfermeras import Enfermera
import json
import re

class Gestor:
    def __init__(self):
        self.pacientes=[]
        self.medicamentos=[]
        self.doctores=[]
        self.enfermeras=[]
            
        self.medicamentos.append(Medicamento('ubuprofeno','5', 'para el dolor', '2 tabletas'))
        self.pacientes.append(Paciente('hugo', 'giron','27/09/01','h','hdgg','admi1','7832' ))
        self.pacientes.append(Paciente('katerine', 'martinez','27/09/01','f','kmgg','admi2','0503' ))
        self.doctores.append(Doctor('Alan', 'Zoto', '27/09/1985', 'm', 'jsim', '147', 'covid-19', '7536699'))
        self.enfermeras.append(Enfermera('Andrea', 'hernandez', '27/09/2002', 'f', 'Anh69', '4567', '783205'))



    #Create
    def crearMedicamento(self,nombre, precio, descripcion, cantidad):
        self.medicamentos.append(Medicamento(nombre, precio, descripcion, cantidad))

    def crearPaciente(self,nombre, apellido, nacimiento, genero, usuario, contraseña, telefono):
        self.pacientes.append(Paciente(nombre, apellido, nacimiento, genero, usuario, contraseña, telefono))

    def crearDoctor(self,nombre, apellido, nacimiento, genero, usuario, contraseña, especialidad, telefono):
        self.doctores.append(Paciente(nombre, apellido, nacimiento, genero, usuario, contraseña, especialidad, telefono))    


    #Read
    def obtener_medicamento(self):
        return json.dumps([ob.__dict__ for ob in self.medicamentos])

    def obtener_paciente(self):
        return json.dumps([ob.__dict__ for ob in self.pacientes])

    def obtener_doctor(self):
        return json.dumps([ob.__dict__ for ob in self.doctores])  

    def obtener_enfermera(self):
        return json.dumps([ob.__dict__ for ob in self.enfermeras])   

    #Update
    def actualizar_medicamentos(self, nombres, precio, nuevoprecio,descripcion, nuevadescripcion,  cantidad, nuevacantidad ):
        for x in self.medicamentos:
            if x.nombre==nombres:
                self.medicamentos[self.medicamentos.index(x)]=Medicamento(nombres, nuevoprecio, nuevadescripcion, nuevacantidad)
                return True
        return False

    def actualizar_doctores(self, nombres, apellido, nacimiento, nuevonacimiento, genero, nuevogenero, usuario, nuevousuario, contraseña, nuevacontraseña, especialidad, nuevaespecialidad, telefono, nuevotelefono ):
        for x in self.doctores:
            if x.nombre==nombres and x.apellido==apellido  :
                self.doctores[self.doctores.index(x)]=Doctor(nombres, apellido, nuevonacimiento, nuevogenero, nuevousuario, nuevacontraseña, nuevaespecialidad, nuevotelefono)
                return True
        return False

    def actualizar_enfermeras(self, nombres, apellido, nacimiento, nuevonacimiento, genero, nuevogenero, usuario, nuevousuario, contraseña, nuevacontraseña,  telefono, nuevotelefono ):
        for x in self.enfermeras:
            if x.nombre==nombres and x.apellido==apellido  :
                self.enfermeras[self.enfermeras.index(x)]=Enfermera(nombres, apellido, nuevonacimiento, nuevogenero, nuevousuario, nuevacontraseña,  nuevotelefono)
                return True
        return False    

    def actualizar_pacientes(self, nombres, apellido, nacimiento, nuevonacimiento, genero, nuevogenero, usuario, nuevousuario, contraseña, nuevacontraseña,  telefono, nuevotelefono ):
        for x in self.pacientes:
            if x.nombre==nombres and x.apellido==apellido  :
                self.pacientes[self.pacientes.index(x)]=Paciente(nombres, apellido, nuevonacimiento, nuevogenero, nuevousuario, nuevacontraseña,  nuevotelefono)
                return True
        return False

    #Delete
    def eliminar_medicamento(self, nombres):
        for x in self.medicamentos:
            if x.nombre==nombres:
                self.medicamentos.remove(x)
                return True
        return False        

    def eliminar_doctor(self, nombres, apellido):
        for x in self.doctores:
            if x.nombre==nombres and x.apellido==apellido:
                self.doctores.remove(x)
                return True
        return False 
            
    def eliminar_enfermera(self, nombres, apellido):
        for x in self.enfermeras:
            if x.nombre==nombres and x.apellido==apellido:
                self.enfermeras.remove(x)
                return True
        return False

    def eliminar_paciente(self, nombres, apellido):
        for x in self.pacientes:
            if x.nombre==nombres and x.apellido==apellido:
                self.pacientes.remove(x)
                return True
        return False              

    #Iniciar sesion 
    def iniciar_sesion(self,user,password):
        for x in self.pacientes:
            if x.contraseña==password and x.usuario ==user:
                return json.dumps(x.__dict__)
        return '{"nombre":"false"}'

    def registrar_paciente(self,nombre,apellido,nacimiento, genero, usuario, contraseña, telefono):
        self.pacientes.append(Paciente(nombre,apellido,nacimiento, genero, usuario, contraseña, telefono))

    def cargamasiva(self,data):
        hola = re.split('\n',data)
        print(hola[1])
        i=1
        while i < len(hola):
            texto = re.split(',',hola[i])
            self.crearPaciente(texto[0],texto[1],texto[2],texto[3],texto[4],texto[5],texto[6])
            i = i+1 