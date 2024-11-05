import { createRouter, createWebHistory } from "vue-router"
import HomeComponent from "./components/HomeComponent.vue"
import CrearPersonaje from "./components/CrearPersonaje.vue";
import EditarPersonaje from "./components/EditarPersonaje.vue";
import SerieComponent from "./components/SerieComponent.vue";

const myRoutes = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/create", component: CrearPersonaje
    },
    {
        path: "/update", component: EditarPersonaje
    },
    {
        path: "/series/:id", component: SerieComponent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;