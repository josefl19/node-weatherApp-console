// Importar dotenv para añadir la variable del archivo .env a las variables de entorno
import * as dotenv from 'dotenv'
dotenv.config()

import colors from 'colors';
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

                    // Guardar en DB
                    busqueda.agregarHistorial(lugarSeleccionado.nombre);

                    // Clima
                    const climaLugar = await busqueda.climaLugar(lugarSeleccionado.lat, lugarSeleccionado.lng)

                    // Mostrar resultados
                    console.log('\nInformación de la ciudad\n'.green);
                    console.log('Ciudad: ', lugarSeleccionado.nombre);
                    console.log('Lat:', lugarSeleccionado.lat);
                    console.log('Lng:', lugarSeleccionado.lng);
                    console.log('Temperatura: ', climaLugar.temp);
                    console.log('Mínima: ', climaLugar.min);
                    console.log('Máxima: ', climaLugar.max);
                    console.log('Estado del tiempo: ', climaLugar.desc);
                }

            break;

            case 2:
                // Historial de busquedas
                busqueda.historialCapitalizado.forEach( (lugar, i) => {
                    const idx = `${i+1}.`.green;
                    console.log(`${ idx } ${ lugar }`);
                });
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