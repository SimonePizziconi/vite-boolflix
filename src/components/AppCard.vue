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
    }
}
</script>

<template>
    <ul>
        <li v-for="film in store.movieList">
            <h2>Il titolo è:{{ film.title }}</h2>
            <h2>Il titolo originale è:{{ film.original_title }}</h2>
            <span :class="getFlagClass(film.original_language)"></span>
            <h2>Il voto è :{{ film.vote_average }}</h2>
        </li>
    </ul>
</template>