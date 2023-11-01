// De los archivos de datos descargados importar el archivo restaurants.json, y desarrollar las siguientes búsquedas:

// 1. Determinar los restaurantes que han tenido grado B en el barrio del Bronx.
db.restaurants.find({borough:'Bronx', 'grades.grade': 'B'},{name: 1, _id: 0});


// 2. Determinar los restaurantes con puntuación superior a 30.
db.restaurants.find({'grades.score': {$gt: 30}},{name: 1, _id: 0});


// 3. Determinar los restaurantes con cocina italiana en el barrio Brooklyn.
db.restaurants.find({borough: 'Brooklyn', cuisine: 'Italian'},{name: 1, _id: 0});


// 4. Muestre los restaurantes ordenados por barrio y código postal ascendente.
db.restaurants.find({},{name: 1, borough: 1, zipcode: 1, _id: 0}).sort({borough: 1, zipcode: 1});



