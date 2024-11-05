import Global from "@/Global";
import axios from "axios";

export default class PersonajesService {
    api = Global.apiSeries;

    getPersonajesSerie(idSerie) {
        return new Promise(resolve => {
            let url = this.api + "api/series/personajesserie/" + idSerie;

            axios.get(url).then(resolve)
        })
    }

    getPersonajes() {
        return new Promise(resolve => {
            let url = this.api + "api/personajes";
            axios.get(url).then(resolve)
        })
    }

    postPersonaje(personaje){
        return new Promise(resolve => {
            let url = this.api + "api/personajes";
            axios.post(url, personaje).then(resolve)
        })
    }

    putPersonaje(personaje){
        return new Promise(resolve => {
            let url = this.api + "api/personajes";
            axios.put(url, personaje).then(resolve)
        })
    }
}