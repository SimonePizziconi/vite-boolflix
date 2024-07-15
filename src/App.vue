<script>
// Importiamo lo store
import {store} from "./store.js";

// importiamo axios
import axios from "axios";

// Importiamo i componenti
import AppHeader from "./components/AppHeader.vue";
import AppCardFilm from "./components/AppCardFilm.vue";
import AppCardTvSeries from "./components/AppCardTvSeries.vue";

export default{
  name: "App",
  components: {
    AppHeader,
    AppCardFilm,
    AppCardTvSeries,
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

      // Chiamata per i fil
      axios.
      get(endPoint)
      .then(result => {
        store.movieList = result.data.results;
        console.log(store.movieList);
      })
      .catch(error => {
        console.log(error);
      })

      // Chiamata per le serie tv
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
    // Funzione per gestire le bandiere
    getFlagClass(language) {
      if (language === 'it') {
          return 'fi fi-it';
      } else if (language === 'fr') {
          return 'fi fi-fr';
      } else if (language === 'es') {
          return 'fi fi-es';
      } else if (language === 'en') {
          return 'fi fi-gb'; 
      } else if (language === 'us') {
          return 'fi fi-us'; 
      } else {
          return 'fi fi-xx';
      }
    },
    // Funzione per arrotonadare il numero da 1 a 5
    convertVoteToFiveScale(vote) {
      return Math.round(vote / 2);
    },
  },
  created(){
    this.getCharactersFilms();
  },
  // Computed per prendere url immagine completo
  computed:{
    fullImageUrl() {
        return function(path) {
            let imgUrl = "https://image.tmdb.org/t/p/w342/";
            return imgUrl + path;
        };
    } 
  }   
}
</script>



<template>
  <AppHeader @search="getCharactersFilms"/>
  <main>
    <!-- Contenitore delle schede dei film -->
    <div class="container">
      <h2 v-if="store.movieList.length > 1">FILM</h2>
      <AppCardFilm :movies="store.movieList" :tvSeries="store.tvSeriesList" :getFlagClass="getFlagClass" :convertVoteToFiveScale="convertVoteToFiveScale" :fullImageUrl="fullImageUrl"/>
    </div>
    <!-- Contenitore delle schede delle serie tv -->
    <div class="container">
      <h2 v-if="store.movieList.length > 1">SERIE TV</h2>
      <AppCardTvSeries :movies="store.movieList" :tvSeries="store.tvSeriesList" :getFlagClass="getFlagClass" :convertVoteToFiveScale="convertVoteToFiveScale" :fullImageUrl="fullImageUrl"/>
    </div>
  </main>
  
</template>

<style lang="scss" scoped>
@use "../src/style/partials/variables.scss" as *;

  main {
    background-color: $bg_color;

    h2 {
      width: 100%;
      margin-top: 20px;
      color: $text_color;
    }
  }

</style>
