<script>
// Importiamo lo store
import {store} from "./store.js";

// importiamo axios
import axios from "axios";

export default{
  name: "App",
  data (){
    return {
      store,
    }
  },
  methods: {
    getCharacters(){
      axios.
      get(store.apiURL)
      .then(result => {
        console.log("questo è un console log");
        store.movieList = result.data;
        console.log(store.movieList);
      })
      .catch(error => {
        console.log(error);
      })
    },
  },
  created(){
    this.getCharacters();
  }
}
</script>



<template>

</template>

<style scoped>

</style>
