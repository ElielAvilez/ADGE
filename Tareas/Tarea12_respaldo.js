# A partir de la colección people, realice un respaldo de los 
# documentos activos y personas de sexo femenino.

mongodump -d datosdb -c people --query='{"isActive":true, "gender":"female"}' --out activosFemenino


# A partir de la colección people realice un respaldo comprimido 
# que incluya los documentos de personas con edades entre 40 y 60 años.

mongodump -d datosdb -c people --query='{"age":{"$gt":40}}' --out entre40y60 --gzip

# A partir del los respaldos anteriores realice su restauración 
# en una base de datos distintas. 

