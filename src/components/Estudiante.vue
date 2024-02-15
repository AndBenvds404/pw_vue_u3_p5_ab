<template>
  <div>
    
    
    <h1>Componente Estudiante</h1>

        <div class="container-formulario">
            
            <div class="formulario" > 
                <h2>Guardar Estudiante</h2>
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
                <p type="Gratuidad:" >  <input v-model="gratiudad" type="boolean"> </p>

                
            </div>
        </div>
        

    <div class="container-formulario">
       

        <div class="formulario" > 
                <h2>Insertar Estudiante</h2>
                <p type="Nombre:" >  <input v-model="nombre" type="text"> </p>
                <p type="Apellido:" >  <input  v-model="apellido" type="text"> </p>
                <p type="Cedula:" >  <input v-model="cedula" type="text"> </p>
                <p type="G&#233;nero:" >  <input v-model="genero" type="text"> </p>
                <p type="Fecha de nacimiento:" >  <input v-model="fechaNacimiento" type="text"> </p>
                <p type="Sangre:">  <input v-model="sangre" type="text"> </p>
                <p type="Matricula:" >  <input v-model="matricula" type="text"> </p>
                <p type="Semestre" >  <input v-model="semestre" type="text"> </p>
                <p type="Gratuidad:" >  <input v-model="gratiudad" type="text"> </p>
                <div class="btn-guardar">
                    <button @click="insertar()">Guardar</button>
                    
                </div>
                
            </div>
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
            apellido:null,
            cedula:null,
            genero:null,
            fechaNacimiento:null,
            sangre:null,
            matricula:null,
            semestre:null,
            gratiudad:null,
            obj:{
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
.container-formulario{
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
}

.formulario{
    width: 340px;
    height: 770px;
    background: #e6e6e6;
    border-radius: 17px;
    padding: 20px 30px;
    font-family: 'Courier New', Courier, monospace;
    box-shadow: 0px 0px 40px -7px black;
}


h2{
    margin: 20px 0px;
    padding-bottom: 10px;
    width: 180px;
    color: #78788c;
    border-bottom: 2px solid black;
}

p:before{ /*se renderiza antes de cargar la pagina*/
    
    content:attr(type);
    display: block;
    margin: 5px 2px;
    font-size: 16px;
    color: #5a5a5a;
    text-align: left;
    
    
}


input{
    font-family: 'Courier New', Courier, monospace;
    width: 98%;
    border: none;
    border-bottom: 2px solid #bebed2;
    background: none;
    

}

input:focus{
    border-bottom: 3px solid #78788c;
    outline: none;
    
}

.input-id{
    text-align: center;
    font-size: 30px;
    margin-top: 20px;
    width: 90px;
}



.btn-guardar{
    display: flex;
    justify-content: center;
    margin-top: 20px;
    
}

button{
    padding: 7px;
    border-radius: 7px;
    background-color: white;
    
    color: #36363f;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
}

button:hover{
    background-color: #2f9de69d;
    cursor: pointer;
}

header{
    text-align: center;
    font-size: 27px;
    padding: 10px;

    
}

input:hover{
    border-bottom: 3px solid #78788c;
    
}


</style>
