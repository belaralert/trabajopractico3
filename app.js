const moduloTareas = require ('./tareas');
const process = require('process');

const accion = process.argv[2];

switch (accion) {                   //en la terminar hago un node app.js agregar 'titulo' 'estado'
    case 'agregar':
        let titulo = process.argv[3];
        let estado = process.argv[4];
        moduloTareas.agregarTarea(titulo,estado)
        break;
    case 'listar':
        moduloTareas.listarTareas();
    break;
    case 'filtrar' :                //hago un node app.js filtrar 'estado'        
    moduloTareas.filtrarPorEstado(process.argv[3])
    break;
    case undefined : 
        console.log('TIENES QUE ESCRIBIR UN TÍTULO.');
    break;
    default:
        console.log('NO ENTIENDO QUÉ QUIERES HACER.');
        break;
}