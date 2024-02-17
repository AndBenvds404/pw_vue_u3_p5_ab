<template>
      <div class="container-formulario">
       

       <div class="formulario" > 
               <h2>Insertar Estudiante</h2>
               <p type="Nombre:" >  <input v-model="body.nombre" type="text"> </p>
               <p type="Apellido:" >  <input  v-model="body.apellido" type="text"> </p>
               <p type="Cedula:" >  <input v-model="body.cedula" type="text"> </p>
               <p type="G&#233;nero:" >  <input v-model="body.genero" type="text"> </p>
               <p type="Fecha de nacimiento:" >  <input v-model="body.fechaNacimiento" type="text"> </p>
               <p type="Sangre:">  <input v-model="body.sangre" type="text"> </p>
               <p type="Matricula:" >  <input v-model="body.matricula" type="text"> </p>
               <p type="Semestre" >  <input v-model="body.semestre" type="text"> </p>
               <p type="Gratuidad:" >  <input v-model="body.gratiudad" type="checkbox"> </p>
               
               <div class="btn-guardar">
                   <button @click="insertar()">Guardar</button>
                   
               </div>
               
       </div>

   </div>
</template>

<script>
import {insertarFachada} from '@/helpers/clienteEstudiante'
export default {

    
    data(){
        return{
            id:null,

            body:{
                nombre:null,
                apellido:null,
                cedula:null,
                genero:null,
                fechaNacimiento:null,
                sangre:null,
                matricula:null,
                semestre:null,
                gratiudad:null
            }
}
        
    },
    methods:{


        async insertar(){
  
            console.log(this.body);
            await insertarFachada(this.body);
        }
        

    }


}
</script>

<style>

</style>