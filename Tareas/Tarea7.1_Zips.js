// De los archivos de datos descargados importar el archivo zip.json, y desarrollar las siguientes búsquedas:

// 1. Determinar cuantos documentos se tiene del estado de Nueva York.
db.zips.find({'state':'NY'}).count();


// 2. Determinar las ciudades registradas para el estado de california, mostrando el nombre 
db.zips.find({'state':'CA'}, {'city': 1, '_id': 0});



// 3. Determinar los códigos postales de la ciudad de San francisco. Mostrando las coordenadas de cada uno de ellos
db.zips.find({'city':'SAN FRANCISCO'},{'loc': 1});




