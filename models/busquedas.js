import axios from "axios";

class Busquedas {
    historial = ['Acambaro', 'Nueva York', 'Zapopan']

    constructor() {

    }

    get paramsMapbox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'es'
        }
    }

    async ciudad( lugar = '' ) {
        try {
            // peticion HTTP
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,
                params: this.paramsMapbox
            });

            const resp = await instance.get();
            console.log(resp.data);

            return [];

        } catch (error) {
            return [];
        }

        // return lugares
    }
}

export { Busquedas }