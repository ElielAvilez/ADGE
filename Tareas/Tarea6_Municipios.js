// Crea conexión con base de datos
db = db.getSiblingDB('local');

// 1. A la colección de municipios de Sinaloa crea una arreglo que contenga el nombre de 3 sindicaturas al municipio de Culiacán 

// Inserta multiples registros 
db.municipios.insertOne(
        {nombre: 'Culiacán', población: 858638, superficie: 4758, sindicaturas: ["Aguaruto", "Costa Rica", "Eldorado"]}
);



// 2. Incrementa en 1000 habitantes a todos municipios (buscar operador)
db.municipios.update(
    {},
    {
        $inc: { poblacion : 1000 }
    }
);


// 3. Agregar un campo presidente a todos los municipios
db.municipios.update(
    {},
    {
        $set: {presidente: ''}
    }
);


// 4. Establecer el nombre del presidente a Culiacán y Mazatlán.
db.municipios.update(
    {nombre: 'Culiacán'},
    {
        $set: {presidente: 'Juan de Dios Gámez Mendivil'}
    }
);

db.municipios.update(
    {nombre: 'Mazatlán'},
    {
        $set: {presidente: 'Edgar Augusto Gonzáles Zatarain'}
    }
);



// 5. Cambiar el nombre de campo superficie por área

db.municipios.update(
    {},
    {
        $rename: {'superficie' : 'área'}
    }
);