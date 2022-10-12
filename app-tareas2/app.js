let archivoTareas = require('./funcionesDeTareas');

//Si desea investigar un poco más sobre este módulo nativo de NodeJs
//https://nodejs-es.github.io/api/process.html#process_es_process 
let accion = process.argv[2];

switch(accion) {
    case 'listar':
        console.log('Listado de tareas');
        console.log('------------------');
        let tareas = archivoTareas.leerArchivo();

        tareas.forEach((task ,i) => {
            console.log(i + 1 + " " + task.titulo)
        });
        case 'crear':
            console.log("nueva tarea creada");
            const titulo = process.argv[3];
            let tarea ={
                titulo: titulo, 
                estado: 'pendiente'
            };
            archivoTareas.guardarTarea(tarea);
        
/*         for (let i = 0;  i < tareas.length; i++) {
            console.log((i + 1) +'. ' + tareas[i].titulo + ' - ' + tareas[i].estado);
        } */
        console.log()
        break;

    case 'filtrar':
        const estado = process.argv[3];
        let filtradas = archivoTareas.filtrarPorEstado(estado);
        //console.log('Tareas filtradadas: ' + filtradas);
        filtradas.forEach((task , index)=>{
            console.log((index+1) + ' ' + task.titulo);
        })
        break;
    case undefined:
        console.log();    
        console.log('Atención - Tienes que pasarme una acción');
        console.log('Las acciones disponibles son: listar');
        console.log('----------------------------------------');
        break;

    default:
        console.log('------------------------------------');
        console.log('No entiendo qué quieres hacer');
        console.log('Las acciones disponibles son: listar');
        console.log('------------------------------------');
        break;
}
