const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput, listadoTereasBorrar, confirmar, mostrarListadoCheck } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');



require('colors');
console.clear();

const main = async ( ) => {
    
    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    
    if(tareasDB){
        //establecer las tareas;
        tareas.cargarTareasDB(tareasDB);
    }
    
    do{
       opt = await inquirerMenu();

        switch (opt) {
            case '1':
                //crea tarea
                const desc = await leerInput('Descripción:');
                tareas.crearTarea(desc);
                break;
            case '2':
                // console.log( tareas.listadoArr );
                if(tareas.listadoArr.length !== 0){
                    tareas.listarTareas(tareas.listadoArr);
                }else{
                    console.log('no se encontro nada en la base de datos');
                }
                break;

            case '3':
                tareas.listarPendientesCompletadas(true);
            break;

            case '4':
                tareas.listarPendientesCompletadas(false);
            break;

            case '5':
                const ids = await mostrarListadoCheck( tareas.listadoArr );
                tareas.toggleCompletadas( ids );
            break;

            case '6':
               const id = await listadoTereasBorrar(tareas.listadoArr);
               if(id !== '0'){
                   const ok = await confirmar('¿Esta seguro?');
                   if(ok){
                       tareas.borrarTarea( id );
                       console.log('TAREA BORRADA!!');
                   }   
               }
            break;
        
        }

        guardarDB(tareas.listadoArr);

        await pausa();

    }while(opt !== 0)

    // pausa();
} 

main();