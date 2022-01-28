// const { resolve } = require('path');

// require('colors');

// const mostrarMenu = () => {

//     return new Promise( resolve => {
        
//         console.clear();
//         console.log('=========================');
//         console.log('  Seleccione una opcion  '.bgWhite.black);
//         console.log('=========================');
//         console.log('1. Crear Tarea');
//         console.log('2. Listar tarea');
//         console.log('3. Listar tareas completadas');
//         console.log('4. Listar tareas pendientes');
//         console.log('5. Complatar tareas');
//         console.log('6. Borrar tarea');
//         console.log('0. Salir');
//         console.log('=========================');
    
//         const readline = require ( 'readline').createInterface({
//             input: process.stdin,
//             output: process.stdout
//         })
    
//         readline.question('Seleccione una opción: ', (opt) => {
//             readline.close();
//             resolve(opt);
//         })

//     } )

// }

// const pausa = () => {
       
//     return new Promise( resolve => {
        
//         const readline = require ('readline').createInterface({
//             input: process.stdin,
//             output: process.stdout
//         })
    
//         readline.question(`\nPresione ${'ENTER'.green} para continuar`, (opt) => {
//             readline.close();
//             resolve();
//         })

//     } )

// }

// module.exports = {
//     mostrarMenu,
//     pausa
    
// }