<!-- App.vue -->
<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import { store } from "./store.js";
import axios from "axios";

export default {
  name: "App",
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store,
      searchText: '',
      movieList: [],
      tvSeriesList: []
    };
  },
  methods: {
    getCharactersFilms() {
      let endPoint = store.apiURL;
      let endPointSeries = store.tvApiURL;

      if (store.movieText !== ``) {
        endPoint += `${store.movieText}`;
        endPointSeries += `${store.movieText}`;
        store.movieText = "";
        console.log(endPoint);
      }

      axios
        .get(endPoint)
        .then((result) => {
          this.movieList = result.data.results;
          console.log(this.movieList);
        })
        .catch((error) => {
          console.log(error);
        });

      axios
        .get(endPointSeries)
        .then((result) => {
          this.tvSeriesList = result.data.results;
          console.log(this.tvSeriesList);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getFlagClass(language) {
      if (language === "it") {
        return "fi fi-it";
      } else if (language === "fr") {
        return "fi fi-fr";
      } else if (language === "es") {
        return "fi fi-es";
      } else if (language === "en") {
        return "fi fi-gb";
      } else if (language === "us") {
        return "fi fi-us";
      } else {
        return "fi fi-xx";
      }
    },
    convertVoteToFiveScale(vote) {
      return Math.round(vote / 2);
    },
    fullImageUrl(path) {
      let imgUrl = "https://image.tmdb.org/t/p/w342/";
      return imgUrl + path;
    }
  },
  created() {
    this.getCharactersFilms();
  }
};
</script>

<template>
    <AppHeader @search="getCharactersFilms"/>
    <AppMain 
      :movie-list="movieList"
      :tv-series-list="tvSeriesList"
      :getFlagClass="getFlagClass"
      :convertVoteToFiveScale="convertVoteToFiveScale"
      :fullImageUrl="fullImageUrl"
    />
</template>

<style lang="scss">

</style>
