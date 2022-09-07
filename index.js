// Importar dotenv para añadir la variable del archivo .env a las variables de entorno
import * as dotenv from 'dotenv'
dotenv.config()

import { inquirerMenu, leerInput, pausa } from "./helpers/inquirer.js";
import { Busquedas } from "./models/busquedas.js";

const main = async() => {
    let opt;
    const busqueda = new Busquedas();

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                // Mostrar mensaje
                const lugar = await leerInput('Ciudad: ');
                await busqueda.ciudad(lugar);

                // Buscar lugares

                // Seleccionar lugares

                // Clima

                // Mostrar resultados
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad: ', );
                console.log('Lat:', );
                console.log('Lng:', );
                console.log('Temperatura: ',);
                console.log('Mínima: ',);
                console.log('Máxima: ',);

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