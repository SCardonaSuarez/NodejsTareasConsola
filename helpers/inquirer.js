const inquirer = require('inquirer')
require('colors')


const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer',
        choices: [
            {
                value: '1',
                name: '1. Crear tarea'
            },
            {
                value: '2',
                name: '2. Lista de tarea'
            },
            {
                value: '3',
                name: '3. Tareas completadas'
            },
            {
                value: '4',
                name: '4. Listar atarea pendiente'
            },
            {
                value: '5',
                name: '5. Completar tarea(s)'
            },
            {
                value: '6',
                name: '6. Borrar tarea'
            },
            {
                value: '0',
                name: '0. Salir'
            }
        ]
    }
]



const inquireMenu = async() =>{
    console.clear()
    console.log('==============================='.green)
    console.log('  Selecciona una Opción'.green);
    console.log('===============================\n'.green);

    const {opcion} = await inquirer.prompt(preguntas)

    return opcion

}

const pausa = async() => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'enter'.green} para continuar`
        }
    ]
    console.log('\n');
    await inquirer.prompt(question)
}

module.exports = {
    inquireMenu,
    pausa
}




