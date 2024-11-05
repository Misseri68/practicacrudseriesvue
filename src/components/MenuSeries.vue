<template>
    <div>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarsExample03">
                    <ul class="navbar-nav me-auto mb-2 mb-sm-0">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link ">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/create" class="nav-link">Nuevo personaje</router-link>
                        </li>
                        <li>
                            <router-link to="/update" class="nav-link">Modificar personaje</router-link>
                        </li>
                        <li class="nav-item dropdown ms-5">
                            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                                aria-expanded="false">Series</a>
                            <ul class="dropdown-menu">
                                <li v-for="serie in series" :key="serie">
                                    <router-link class="dropdown-item" :to="'/series/' + serie.idSerie">
                                        {{ serie.nombre }}
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <form role="search">
                        <input class="form-control" type="search" placeholder="Search" aria-label="Search">
                    </form>
                </div>
            </div>
        </nav>

    </div>
</template>

<script>
import SerieServices from '@/services/SerieServices';
const service = new SerieServices();

export default {
    name: "MenuSeries",
    data() {
        return {
            series: []
        }
    },
    mounted(){
        service.getSeries().then(response=> this.series = response.data)
    }

}
</script>

<style lang="scss" scoped></style>