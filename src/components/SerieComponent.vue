<template>
    <div v-if="!verPersonajes" class="container my-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card shadow">
                    <img :src="serie.imagen" class="card-img-top img-fluid" alt="Imagen de la serie"
                        style="max-height: 300px; object-fit: cover;">
                    <div class="card-body text-center">
                        <h4 class="card-title">{{ serie.nombre }}</h4>
                        <p class="card-text"><strong>Puntuación:</strong> {{ serie.puntuacion }}</p>
                        <p class="card-text"><strong>Año:</strong> {{ serie.anyo }}</p>
                        <p class="card-text"><strong>ID de la Serie:</strong> {{ serie.idSerie }}</p>
                    </div>
                    <div class="d-flex justify-content-center mb-3">
                        <button @click="togglePeronajes()" class="btn btn-primary">Ver personajes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="container my-5">
        <h1 class="text-center mb-4">Lista de Personajes</h1>
        <div class="row">
            <div class="col-md-4" v-for="personaje in personajes" :key="personaje.idPersonaje">
                <div class="card mb-4 shadow">
                    <img :src="personaje.imagen" class="card-img-top img-fluid" alt="Imagen de personaje"
                        style="max-height: 300px; object-fit: cover;">
                    <div class="card-body text-center">
                        <h5 class="card-title">{{ personaje.nombre }}</h5>
                        <p class="card-text"><strong>ID de la Serie:</strong> {{ personaje.idSerie }}</p>
                        <p class="card-text"><strong>ID del Personaje:</strong> {{ personaje.idPersonaje }}</p>
                    </div>
                </div>
            </div>
        </div>
        <button @click="togglePeronajes()">Volver</button>
    </div>
</template>

<script>
import SerieServices from '@/services/SerieServices';
import PersonajesService from '@/services/PersonajesService';
const serviceSeries = new SerieServices();
const servicePer = new PersonajesService();
export default {
    name: "SerieComponent",
    data() {
        return {
            idSerie: null,
            serie: {},
            verPersonajes: false,
            personajes: []
        }
    },
    methods: {
        getSerie() {
            serviceSeries.getSerie(this.idSerie).then(response => {
                this.serie = response.data;
            }
            )
        },

        togglePeronajes() {
            this.verPersonajes = ! this.verPersonajes;
            if(this.verPersonajes) {this.cargarPersonajes()}
        },

        cargarPersonajes(){
            servicePer.getPersonajesSerie(this.idSerie).then(response => this.personajes = response.data)
        }
    },
    mounted() {
        this.idSerie = this.$route.params.id;
        console.log()
        this.getSerie();
    },
    watch: {
        '$route.params.id'(newVal, oldVal) {
            if (newVal != oldVal) {
                console.log("valor cambiado de " + oldVal + " a " + newVal)
                this.idSerie = this.$route.params.id;
                this.personajes = []
                this.verPersonajes = false;
                this.getSerie();
            }
        }
    }
}
</script>

<style lang="scss" scoped></style>