let archivoTareas = require("./funionesDeTareas");
let tareas = archivoTareas.leerArchivo();
let accion = process.argv[2];
console.log(accion)

//console.log('Tareas', tareas);

switch (accion){
        case 'listar':
for(let i =0 ; i < tareas.length; i++){+g
        console.log(tareas[i]);
}
break;
case undefined:
        console.log("Atención tienes que pasarme una acción");
break;
default: 
        console.log("No entiendo que quieres hacer");
break;
}

