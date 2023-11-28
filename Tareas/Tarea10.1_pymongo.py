from pymongo import MongoClient

conexion = MongoClient('mongodb://eliel:eliel123@localhost:27017')

db = conexion['datosdb']
miColeccion = db['zips']

# 1. Determinar cuantos documentos se tiene del estado del Nueva York.
cantidadDocumentos = miColeccion.find({'state':'NY'}).count()

print("Documentos registrados en Nueva York: ", cantidadDocumentos)

# 2. Determinar las ciudades registradas para el estado de california, mostrando el nombre 
misDocumentos = miColeccion.find({'state':'CA'}, {'city': 1, '_id': 0})

print("\nCiudades registradas para California: \n")

for documento in misDocumentos: 
    print(documento)




# 3. Determinar los códigos postales de la ciudad de San francisco. Mostrando las coordenadas de cada uno de ellos
misDocumentos = miColeccion.find({'city':'SAN FRANCISCO'}, {'loc': 1})

print("\nCoordenadas y códigos postales de ciudades registradas para San francisco: \n")

for documento in misDocumentos: 
    print(documento)
