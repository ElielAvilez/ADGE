// Crear una función llamada consulta04 que determine los 
// documentos activos con mas de una cantidad de años que 
// se hayan registrado antes de una cierta hora. Utilice 
// parámetros en la función para crear la consulta.


var consulta04 = function(antiguedadP, horaP) { 
    return db.people.aggregate({
        $project: {
            _id: 0,
            name: 1,
            gender: 1,
            registered: 1,
            antiguedad: {$toInt: {$dateDiff: {startDate: {$dateFromString: {dateString: "$registered"}},
                                              endDate: new Date(),
                                              unit: "year"}}},
            horaRegistro: {$hour: {$dateFromString: {dateString: "$registered"}}}
        }
    }, 
    {
        $match: {
            $and: [
                {antiguedad: {$gte: antiguedadP}},
                {horaRegistro: {$lte: horaP}}
            ]
        }
    }
);



};


print("Datos cargados correctamente");