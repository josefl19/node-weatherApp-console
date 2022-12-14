import inquirer from 'inquirer';
import colors from "colors";

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: 1,
                name: `${'1.'.green} Buscar ciudad`
            },
            {
                value: 2,
                name: `${'2.'.green} Historial de ciudades`
            },
            {
                value: 0,
                name: `${'0.'.green} Salir`
            }
        ]
    }
];

// Impresion de menu
const inquirerMenu = async() => {
    console.log('============================'.blue);
    console.log('   Selecciona una opción   '.bold.blue);
    console.log('============================\n'.blue);

    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;
}

// Pausar la ejecucion de la app y continuar hasta dar ENTER
const pausa = async() => {
    await inquirer.prompt([
        {
            type: 'input',
            name: 'enter',
            message: `\nPresione ${ 'ENTER'.bold.red } para continuar`
        }
    ]);
}

const leerInput = async( message ) => {
    const question = [{
        type: 'input',
        name: 'desc',
        message,
        validate( value ) {
            if(value.length === 0) {
                return 'Por favor ingrese un valor'
            }
            return true;
        }
    }];

    const { desc } = await inquirer.prompt(question);
    return desc;
}

const listarLugares = async( lugares = [] ) => {
    const choices = lugares.map( (lugar, i) => {
        const idx = `${i + 1}`.green;

        return {
            value: lugar.id,
            name: `${ idx } ${ lugar.nombre }`
        }
    })

    choices.unshift({
        value: 0,
        name: '0.'.green + ' Cancelar'
    });

    const questions = [
        {
            type: 'list',
            name: 'id',
            message: 'Seleccione un lugar',
            choices
        }
    ]

    const { id } = await inquirer.prompt(questions);
    return id;
}

export {
    inquirerMenu,
    pausa,
    leerInput,
    listarLugares
}