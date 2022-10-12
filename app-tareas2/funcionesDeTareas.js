const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerArchivo: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    escribirJSON:function(tareas){
      fs.writeFileSync(this.archivo, JSON.stringify(tareas,null, ' '));
    },
    guardarTarea(tarea){
        let tareas = this.leerArchivo();
        tareas.push(tarea);
        this.escribirJSON(tareas)
    },
    filtrarPorEstado(estado){
        let tareas = this.leerArchivo();
        let tareasFiltradas = tareas.filter((tarea)=> tarea.estado === estado );
        //.log(tareasFiltradas)
        return tareasFiltradas
    
    }
}
module.exports = archivoTareas;