// Crear un script que contenga una función llamada consulta01  
// que muestre los documentos que contengan una determinada edad, 
// la edad debe pasarse como parámetro a la función, mostrando el nombre.


var consulta01 = function(ageP) { 
    return db.people.find ({"age": ageP},{_id: 0, name: 1, age:1}); 
};


print("Datos cargados correctamente");
