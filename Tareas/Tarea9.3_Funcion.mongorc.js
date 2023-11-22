//  Crear una función llamada consulta03 almacenada 
//  en una colección del sistema que determine 
//  documentos con antigüedad entre un rango de años.



var consulta03 = function(rangoInicio, rangoFin) { 
    return db.people.aggregate({
            $project: {
                _id: 0,
                name: 1,
                gender: 1,
                registered: 1,
                antiguedad: {$toInt: {$dateDiff: {startDate: {$dateFromString: {dateString: "$registered"}},
                                                  endDate: new Date(),
                                                  unit: "year"}}}
            }
        }, 
        {
            $match: {
                $and: [
                    {antiguedad: {$gte: rangoInicio}},
                    {antiguedad: {$lte: rangoFin}}
                ]
            }
        }
    ); 
};


print("Datos cargados correctamente");