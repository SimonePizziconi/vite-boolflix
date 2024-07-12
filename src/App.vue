<script>
// Importiamo lo store
import {store} from "./store.js";

// importiamo axios
import axios from "axios";

// Importiamo i componenti
import AppHeader from "./components/AppHeader.vue";
import AppCard from "./components/AppCard.vue";

export default{
  name: "App",
  components: {
    AppHeader,
    AppCard,
  },
  data (){
    return {
      store,
    }
  },
  methods: {
    getCharactersFilms(){
      // Assegnamo Variabile all'EndPoint
      let endPoint = store.apiURL;
      let endPointSeries = store.tvApiURL;


      // Condizione per fare una chiamata all'api richiesta
      if(store.movieText !== ``){
          endPoint += `${store.movieText}`;
          endPointSeries += `${store.movieText}`;
          store.movieText = "",
          console.log(endPoint);
      }
      axios.
      get(endPoint)
      .then(result => {
        store.movieList = result.data.results;
        console.log(store.movieList);
      })
      .catch(error => {
        console.log(error);
      })

      axios.
      get(endPointSeries)
      .then(result => {
        store.tvSeriesList = result.data.results;
        console.log(store.tvSeriesList);
      })
      .catch(error => {
        console.log(error);
      }) 
    },
  },
  created(){
    this.getCharactersFilms();

  },
}
</script>



<template>
  <AppHeader @search="getCharactersFilms"/>
  <AppCard/>
</template>

<style scoped>

</style>
