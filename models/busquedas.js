import fs from 'fs';

import axios from "axios";

class Busquedas {
    historial = [];
    dbPath = './db/historial.json'

    constructor() {
        this.leerBD();
    }

    get paramsMapbox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'es'
        }
    }

    get paramsOpenWeather() {
        return {
            'appid': process.env.OPENWEATHER_KEY,
            'units': 'metric',
            'lang': 'es'
        }
    }

    get historialCapitalizado() {
        return this.historial.map( lugar => {
            let palabras = lugar.split(' ');
            palabras = palabras.map( p => p[0].toUpperCase() + p.substring(1));
            
            return palabras.join(' ');
        })
    }

    async ciudad( lugar = '' ) {
        try {
            // peticion HTTP
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,
                params: this.paramsMapbox
            });

            const resp = await instance.get();

            // retornar un OBJETO con solo las propiedades necesarias
            return resp.data.features.map( lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1]
            }));

        } catch (error) {
            return [];
        }

        // return lugares
    }

    async climaLugar( lat, lon ) {
        try {
            const instance = axios.create({
                baseURL: 'https://api.openweathermap.org/data/2.5/weather',
                params: {lat, lon, ...this.paramsOpenWeather}
            })

            const resp = await instance.get();
            const { weather, main } = resp.data;

            // retornar un OBJETO con solo las propiedades necesarias
            return {
                desc: weather[0].description,
                temp: main.temp,
                min: main.temp_min,
                max: main.temp_max,
            };

        } catch (error) {
            return [];
        }
    }

    agregarHistorial( lugar = []) {
        if(this.historial.includes( lugar.toLocaleLowerCase() )) {
            return;
        }

        this.historial.unshift( lugar.toLocaleLowerCase() );

        // Guardar
        this.guardarBD();
    }

    guardarBD() {
        const payload = {
            historial: this.historial
        }
        
        fs.writeFileSync(this.dbPath, JSON.stringify( payload ))
    }

    leerBD() {
        if(!fs.existsSync(this.dbPath)) return;

        const info = fs.readFileSync( this.dbPath, {encoding: 'utf-8'});        // Encoding para evitar retornar los bytes
        const data = JSON.parse(info);
    
        this.historial = data.historial;
    }
}

export { Busquedas }