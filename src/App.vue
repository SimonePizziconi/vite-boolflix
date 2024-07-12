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
    // Funzione per gestire le bandiere
    getFlagClass(language) {
      if (language === 'it') {
          return 'fi fi-it';
      } else if (language === 'fr') {
          return 'fi fi-fr';
      } else if (language === 'es') {
          return 'fi fi-es';
      } else if (language === 'en') {
          return 'fi fi-gb'; // Inghilterra
      } else if (language === 'us') {
          return 'fi fi-us'; // Stati Uniti
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
    <h1>FILM</h1>
    <div class="container">
      <AppCardFilm :movies="store.movieList" :tvSeries="store.tvSeriesList" :getFlagClass="getFlagClass" :convertVoteToFiveScale="convertVoteToFiveScale" :fullImageUrl="fullImageUrl"/>
      <AppCardTvSeries :movies="store.movieList" :tvSeries="store.tvSeriesList" :getFlagClass="getFlagClass" :convertVoteToFiveScale="convertVoteToFiveScale" :fullImageUrl="fullImageUrl"/>
    </div>
  </main>
  
</template>

<style>

  main{
    background-color: #141414;
  }


</style>
