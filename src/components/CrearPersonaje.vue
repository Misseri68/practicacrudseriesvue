<template>
    <div class="container my-5">
        <h1 class="text-center mb-4">Crear Personaje</h1>
        <form @submit.prevent="insertarPersonaje()" class="form">
            <div class="mb-3">
                <label for="nombre" class="form-label">Nombre</label>
                <input type="text" v-model="nuevoPersonaje.nombre" class="form-control" id="nombre" required>
            </div>
            <div class="mb-3">
                <label for="imagen" class="form-label">Imagen URL</label>
                <input type="text" v-model="nuevoPersonaje.imagen" class="form-control" id="imagen" required>
            </div>
            <div class="mb-3">
                <label for="idSerie" class="form-label">ID de la Serie</label>
                <input type="number" v-model="nuevoPersonaje.idSerie" class="form-control" id="idSerie" required>
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-primary">Crear Personaje</button>
            </div>
        </form>
    </div>
</template>

<script>
import PersonajesService from '@/services/PersonajesService';
const servicePer = new PersonajesService();

    export default {
        name: "CrearPersonaje",
        data() {
            return {
                nuevoPersonaje: {}
            }
        },
        methods: {
            insertarPersonaje(){
                servicePer.postPersonaje(this.nuevoPersonaje).then(response=> console.log(response))
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>