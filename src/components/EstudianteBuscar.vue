<template>
  <div class="container-formulario">
            
            <div class="formulario" > 
                <h2>Consultar Estudiante</h2>
                <p type="Ingrese el Id del Estudiante"><input class="input-id" v-model="id" type="text"> </p>
                
                <div class="btn-guardar">
                    <button @click="consultarPorId()">Consultar</button>
                    
                </div>
                <p type="Nombre:" >  <input v-model="nombre" type="text"> </p>
                <p type="Apellido:" >  <input  v-model="apellido" type="text"> </p>
                <p type="Cedula:" >  <input v-model="cedula" type="text"> </p>
                <p type="G&#233;nero:" >  <input v-model="genero" type="text"> </p>
                <p type="Fecha de nacimiento:" >  <input v-model="fechaNacimiento" type="text"> </p>
                <p type="Sangre:">  <input v-model="sangre" type="text"> </p>
                <p type="Matricula:" >  <input v-model="matricula" type="text"> </p>
                <p type="Semestre" >  <input v-model="semestre" type="text"> </p>
                <p type="Gratuidad:" >  <input v-model="gratiudad" type="checkbox"> </p>

                
            </div>
        </div>
</template>

<script>
import { consultarEstudianteFachada } from '@/helpers/clienteEstudiante'
export default {
    
    data(){
        return{
            id:null,
            nombre:null,
            apellido:null,
            cedula:null,
            genero:null,
            fechaNacimiento:null,
            sangre:null,
            matricula:null,
            semestre:null,
            gratiudad:null,

}
        
    },
    methods:{
        async consultarPorId(){
            const data = await consultarEstudianteFachada(this.id);
            console.log(data);
            this.nombre=data.nombre
            this.apellido=data.apellido
            this.cedula=data.cedula
            this.genero=data.genero
            this.fechaNacimiento=data.fechaNacimiento
            this.sangre=data.sangre
            this.matricula=data.matricula
            this.semestre=data.semestre
            this.gratiudad=data.gratiudad
            


        }
        

    }
}
</script>

<style>

</style>