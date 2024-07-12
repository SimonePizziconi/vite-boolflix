<script>
import {store} from "../store.js";

export default{
    name: "AppCard",
    data(){
        return {
            store,
        }
    },
    methods:{
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
        }
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
    <ul class="movies">
        <li v-for="film in store.movieList">
            <img :src="fullImageUrl(film.poster_path)" alt="">
            <h2>Il titolo è:{{ film.title }}</h2>
            <h2>Il titolo originale è:{{ film.original_title }}</h2>
            <span :class="getFlagClass(film.original_language)"></span>
            <h2>{{ convertVoteToFiveScale(film.vote_average) }}</h2>
        </li>
    </ul>

    <ul class="tv-series">
        <li v-for="series in store.tvSeriesList">
            <img :src="fullImageUrl(series.poster_path)" alt="">
            <h2>il titolo è: {{ series.name }}</h2>
            <h2>Il titolo originale è:{{ series.original_name }}</h2>
            <span :class="getFlagClass(series.original_language)"></span>
            <h2>{{ convertVoteToFiveScale(series.vote_average) }}</h2>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
    .movies{
        background-color: aqua;
    }

    .tv-series{
        background-color: black;
        color: #fff;
    }
</style>