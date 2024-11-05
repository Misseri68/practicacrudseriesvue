<template>
    <div class="row mb-4">
        <div class="col-md-6">
            <label  class="form-label">Selecciona una Serie</label>
            <select v-model="serieSelec" class="form-select" >
                <option value="" disabled selected>Selecciona una serie</option>
                <option v-for="serie in series" :key="serie.idSerie" :value="serie">
                    {{ serie.nombre }}
                </option>
            </select>
        </div>

        <div class="col-md-6">
            <label class="form-label">Selecciona un Personaje</label>
            <select v-model="personajeSelec"  class="form-select" >
                <option value="" disabled selected>Selecciona un personaje</option>
                <option v-for="personaje in personajes" :key="personaje.idPersonaje" :value="personaje">
                    {{ personaje.nombre }}
                </option>
            </select>
        </div>
    </div>
    <button class="btn btn-warning w-25 text-center" @click="editarPersonaje()">Editar!</button>

    <hr>
    <div>
        <img  :src="personajeSelec.imagen" />
        <img  :src="serieSelec.imagen" />

    </div>
</template>

<script>
import SerieServices from '@/services/SerieServices';
import PersonajesService from '@/services/PersonajesService';
const serieService = new SerieServices();
const perService = new PersonajesService();

export default {
    name: "EditarPersonaje",
    data() {
        return {
            personajes: [],
            series: [],
            personajeSelec: {},
            serieSelec: {}
        }
    },
    methods: {
        editarPersonaje(){
            this.personajeSelec.idSerie = this.serieSelec.idSerie;
            perService.putPersonaje(this.personajeSelec).then(()=>{
                console.log("Actualizado!")
                this.$router.push("/series/" + this.serieSelec.idSerie)
            }
            )
        }
    },
    mounted() {
        serieService.getSeries().then(response => this.series = response.data)
        perService.getPersonajes().then(response => this.personajes = response.data)
    }
}
</script>
