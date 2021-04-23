from Pacientes import Paciente
from Medicamentos import Medicamento
import json

class Gestor:
    def __init__(self):
        self.pasientes=[]
        self.medicamentos=[]
            
        self.medicamentos.append(Medicamento('ubuprofeno','5', 'para el dolor', '2 tabletas'))
        self.pasientes.append(Paciente('hugo', 'giron','27/09/01','h','hdgg','admi1','7832' ))
        self.pasientes.append(Paciente('katerine', 'martinez','27/09/01','m','kmgg','admi2','0503' ))



    #Create
    def crearMedicamento(self,nombre, precio, descripcion, cantidad):
        self.medicamentos.append(Medicamento(nombre, precio, descripcion, cantidad))

    #Read
    def obtener_medicamento(self):
        return json.dumps([ob.__dict__ for ob in self.medicamentos])

    def obtener_pasiente(self):
        return json.dumps([ob.__dict__ for ob in self.pasientes])
        
    #Update
    def actualizar_datos(self, nombres, precio, nuevoprecio,descripcion, nuevadescripcion,  cantidad, nuevacantidad ):
        for x in self.medicamentos:
            if x.nombre==nombres:
                self.medicamentos[self.medicamentos.index(x)]=Medicamento(nombres, nuevoprecio, nuevadescripcion, nuevacantidad)
                return True
        return False

    #Delete
    def eliminar_medicamento(self, nombres):
        for x in self.medicamentos:
            if x.nombre==nombres:
                self.medicamentos.remove(x)
                return True
        return False        

            