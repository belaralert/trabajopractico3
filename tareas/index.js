const fs = require('fs');
const tareas = JSON.parse(fs.readFileSync('./db/tareas.json','utf-8'));

module.exports = {
    agregarTarea : function(titulo, estado='pendiente') { //agrego nuevas tareas con el .push y las guardo nombrando a la funcion guardarJson
        let nuevaTarea = {
            titulo,
            estado
        }
        tareas.push(nuevaTarea);
        this.guardarJson(tareas);
        this.listarTareas();
    },
    listarTareas : function(){     //Con un foreach, enlisto las tareas
        tareas.forEach(tarea => {
            console.log(tarea);
        });
    },
    filtrarPorEstado : function(filtro){ 
        let leerPorEstado = tareas.filter(tarea => tarea.estado === filtro)
        return console.log(leerPorEstado);
    },

    guardarJson : function(tareas){
        fs.writeFileSync('./db/tareas.json',JSON.stringify(tareas),'utf-8')
    }


}