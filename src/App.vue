<script>
// Importiamo lo store
import {store} from "./store.js";

// importiamo axios
import axios from "axios";

// Importiamo i componenti
import AppHeader from "./components/AppHeader.vue";

export default{
  name: "App",
  components: {
    AppHeader,
  },
  data (){
    return {
      store,
    }
  },
  methods: {
    getCharacters(){
      // Assegnamo Variabile all'EndPoint
      let endPoint = store.apiURL;


      // Condizione per fare una chiamata all'api richiesta
      if(store.movieText !== ``){
          endPoint += `${store.movieText}`
          console.log(endPoint);
      }
      axios.
      get(endPoint)
      .then(result => {
        console.log("questo è un console log");
        store.movieList = result.data.results;
        console.log(store.movieList);
      })
      .catch(error => {
        console.log(error);
      })
    },
  },
  created(){
    this.getCharacters();

  },
}
</script>



<template>
  <AppHeader @search="getCharacters"/>
</template>

<style scoped>

</style>
