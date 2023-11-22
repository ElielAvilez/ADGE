// Crear un función llamada consulta02 en un script que se cargue 
// al iniciar la consola que determine los documentos con menos de una 
// cantidad de años de antigüedad con terminado sexo y que se hayan 
// registrado en un mes especifico, utilice parámetro en la función 
// para establecer los datos de la consulta.


var consulta02 = function(antiguedadP, genderP, mesP) { 
    return db.people.aggregate({
                    $project: {
                        _id: 0,
                        name: 1,
                        gender: 1,
                        registered: 1,
                        month: {$month: {$dateFromString: {dateString: "$registered"}}}, // Extrae el mes de la fecha que está en string
                        antiguedad: {$dateDiff: {startDate: {$dateFromString: {dateString: "$registered"}},
                                                endDate: new Date(),
                                                unit: "year"}}
                    }
                }, 
                {
                    $match: {
                        antiguedad: {$lt: antiguedadP},
                        gender: {$eq: genderP},
                        month: {$eq: mesP}
                    }
                }
            ); 
};


print("Datos cargados correctamente");


