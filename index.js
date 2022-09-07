// Importar dotenv para añadir la variable del archivo .env a las variables de entorno
import * as dotenv from 'dotenv'
dotenv.config()

import { inquirerMenu, leerInput, listarLugares, pausa } from "./helpers/inquirer.js";
import { Busquedas } from "./models/busquedas.js";

const main = async() => {
    let opt;
    const busqueda = new Busquedas();

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                // Mostrar mensaje
                const search = await leerInput('Ciudad: ');
                
                // Buscar lugares
                const lugares = await busqueda.ciudad(search);
                
                // Seleccionar lugares
                const id = await listarLugares(lugares);
                if(id !== 0) {
                    const lugarSeleccionado = lugares.find( l => l.id === id );

                    // Clima

                    // Mostrar resultados
                    console.log('\nInformación de la ciudad\n'.green);
                    console.log('Ciudad: ', lugarSeleccionado.nombre);
                    console.log('Lat:', lugarSeleccionado.lat);
                    console.log('Lng:', lugarSeleccionado.lng);
                    console.log('Temperatura: ',);
                    console.log('Mínima: ',);
                    console.log('Máxima: ',);
                }

            break;
        
            default:
                break;
        }

        if (opt !== 0) await pausa();  
    } while (opt !== 0);


    //const texto = await leerInput('Mensaje');
    //console.log(texto);
}

main();