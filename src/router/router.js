import { createRouter, createWebHashHistory } from "vue-router";

import EstudianteGuardar from '@/pages/EstudianteGuardar'
import EstudianteConsultar from '@/pages/EstudianteConsultar'
import EstudianteEliminar from '@/pages/EstudianteEliminar'
import EstudianteActualizar from '@/pages/EstudianteActualizar'

const routes=[
    {
        path:'/actualizar',
        component: EstudianteActualizar
    },
    {
        path:'/consultar',
        component: EstudianteConsultar
    },
    {
        path:'/eliminar',
        component: EstudianteEliminar
    },
    {
        path:'/grabar',
        component: EstudianteGuardar
    },

]


const router = createRouter({history: createWebHashHistory(), routes})

export default router