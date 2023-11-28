### Descargar e importar el archivo restaurants.json, y desarrollar las siguientes búsquedas con MongoDB y Python:

import pymongo
from pymongo import MongoClient


conexion = MongoClient('mongodb://eliel:eliel123@localhost:27017')

db = conexion['datosdb']
miColeccion = db['restaurants']


# 1. Determinar los restaurantes que han tenido grado B en el barrio del Bronx.
misDocumentos = miColeccion.find({'borough':'Bronx', 'grades.grade': 'B'},{'name': 1, '_id': 0})

print("Restaurantes con grado B en Bronx: \n")

for documento in misDocumentos: 
    print(documento)

# 2. Determinar los restaurantes con puntuación superior a 30.
misDocumentos = miColeccion.find({'grades.score': {'$gt': 30}},{'name': 1, '_id': 0})

print("Restaurantes con puntuación superior a 30: \n")

for documento in misDocumentos: 
    print(documento)

# 3. Determinar los restaurantes con cocina italiana en el barrio Brooklyn.
misDocumentos = miColeccion.find({'borough': 'Brooklyn', 'cuisine': 'Italian'},{'name': 1, '_id': 0})

print("Restaurantes con cocina italiana en el barrio Brooklyn: \n")

for documento in misDocumentos: 
    print(documento)



# 4. Muestre los restaurantes ordenados por barrio y código postal ascendente.
misDocumentos = miColeccion.find({}, {'name': 1, 'borough': 1, 'zipcode': 1, '_id': 0}).sort([('borough', 1), ('zipcode', 1)])

print("Restaurantes ordenados por barrio y código postal ascendente: \n")

for documento in misDocumentos: 
    print(documento)






