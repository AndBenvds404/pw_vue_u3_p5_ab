<template>
  <h1>Pagina Consultar</h1>
  <EstuConsultarComp/>
</template>

<script>
import EstuConsultarComp from '@/components/EstudianteBuscar.vue'
export default {
  created(){
    console.log(this.$route);
    console.log(this.$route.params.id);
    console.log(this.$route.params.edad);

  },

  components:{
    EstuConsultarComp
  }

}
</script>

<style>

</style>