// A través de mapReduce  recuperar el promedio de edad por género, 
// de los documentos activos  con una antigüedad menor a 10 años 

var map=function(){
    antiguedad = parseInt(this.registered.substring(0, 4)) // Tomar primeros 4 dígitos de fecha (años)

    if (this.isActive == false || antiguedad >= 10)
        return;

    var key = this.gender;
    var values = {sumaEdad:this.age, contEdad:1, edad:this.age};
    emit(key, values);
}

var reduce=function(key, values){
    var datos={
        sumaEdad:0,
        contEdad:0,
        promEdad:0,
        maxEdad:0,
        minEdad:0
    };

    datos.sumaEdad=0;
    datos.contEdad=0;
    datos.minEdad=99;
    datos.maxEdad=-1;

    for(var i=0; i < values.length; i++){
        datos.sumaEdad+=values[i].sumaEdad;
        datos.contEdad+=values[i].contEdad;

        if(datos.maxEdad<values[i].edad)
            datos.maxEdad=values[i].edad;
        if(datos.minEdad>values[i].edad)
            datos.minEdad=values[i].edad;

    }
    
    datos.promEdad=(datos.sumaEdad/datos.contEdad).toFixed(2);
    return datos;
}

db.people.mapReduce(map, reduce,{out: { inline: 1 }});


// A través de mapReduce recuperar el total del balance de los  de los documentos de un determinado año.



// A través de mapReduce recuperar el total del balance de los  de los documentos por año y activos.


// _id: ObjectId('59d280e0b00c1566d98b5588'),
//     isActive: true,
//     balance: '$2,326.00',
//     picture: 'http://placehold.it/32x32',
//     age: 35,
//     name: 'Amelia Vaughan',
//     company: 'Indisco',
//     phone: '858-519-29989',
//     email: 'amelia@indisco.com',
//     address: '24159, Greensboro, Crosby Streets',
//     about: 'Ullamco eiusmod do ad aliqua aute ad laboris qui laborum. Eu enim ex cupidatat in qui eiusmod magna incididunt minim sit fugiat. Fugiat amet est nisi sunt culpa aliquip incididunt ad sunt qui aute sit amet est.\r\n',
//     registered: '2007-09-11T23:39:12 -02:00',
//     latitude: -68,
//     tags: [
//       'reprehenderit',
//       'voluptate',
//       'veniam',
//       'id',
//       'deserunt',
//       'fugiat',
//       'sint'
//     ],
//     friends: [
//       { id: 1, name: 'Rachel Ward' },
//       { id: 2, name: 'Natalie Haig' },
//       { id: 3, name: 'Riley Thorndike' }
//     ],
//     gender: 'male',
//     randomArrayItem: 'teacher'
