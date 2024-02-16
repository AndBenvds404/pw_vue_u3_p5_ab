<template>
  <h1>Pagina Eliminar</h1>

  <div class="container-formulario">
            
            <div class="formulario" > 
                <h2>Eliminar Estudiante</h2>
                <p type="Ingrese el Id del Estudiante a Eliminar"><input class="input-id" v-model="id" type="text"> </p>
                
                <div class="btn-guardar">
                    <button @click="eliminar">Borrar</button>
                    
                </div>
        </div>
    </div>
</template>

<script>

import {eliminarFachada} from '@/helpers/clienteEstudiante'

export default {
    data(){
        return{
            id:null,
}
        
    },
    methods:{
       
        async eliminar (){

            await eliminarFachada(this.id);
        }

        

    }

}
</script>

<style>

</style>