<template>
  <div>
    <h1>Componente Estudiante</h1>
    <input v-model="id" type="text">
    <button @click="consultarPorId()">Consultar</button>
    <input v-model="nombre" type="text">

    <div>
        <button @click="insertar()">Guardar</button>
    <input v-model="apellido" type="text">
    </div>
    

  
  

  </div>
  

</template>

<script>
import { consultarEstudianteFachada } from '@/helpers/clienteEstudiante'
import {insertarFachada} from '@/helpers/clienteEstudiante'

//import {consultarEstudiante} from '../helpers/clienteEstudiante'

export default {

    data(){
        return{
            id:null,
            nombre:null,
            apellido:null
}
        
    },
    methods:{
        async consultarPorId(){
            const data = await consultarEstudianteFachada(this.id);
            console.log(data);
            this.nombre = data.nombre

        },

        async insertar(){
            const estuBody = {
            
                nombre: "Marlon",
                apellido: this.apellido,
                genero: "f",
                fechaNacimiento: "2023-10-10T00:00:00"
            };
            console.log('Se inserto'+estuBody);
            await insertarFachada(estuBody);
        },

        

    }

}
</script>

<style>

</style>