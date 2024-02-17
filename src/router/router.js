import { createRouter, createWebHashHistory } from "vue-router";

/*import EstudianteGuardar from '@/pages/EstudianteGuardar'
import EstudianteConsultar from '@/pages/EstudianteConsultar'
import EstudianteEliminar from '@/pages/EstudianteEliminar'
import EstudianteActualizar from '@/pages/EstudianteActualizar'*/



const routes=[
    {
        path:'/actualizar',
        component: ()=> import ('@/pages/EstudianteActualizar') //carga perezosa
    },
    {
        path:'/consultar',
        component: ()=> import ('@/pages/EstudianteConsultar')
    },
    {
        path:'/eliminar',
        component: ()=> import ('@/pages/EstudianteEliminar')
    },
    {
        path:'/grabar',
        component: ()=> import ('@/pages/EstudianteGuardar')
    },
    {
        path:'/:pathMatch(.*)*',
        component: ()=> import ('@/pages/NoFoundPage')

    }

]


const router = createRouter({history: createWebHashHistory(), routes})

export default router