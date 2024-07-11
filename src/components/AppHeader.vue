<script>
import {store} from "../store.js"

export default{
    name: "AppHeader",
    data(){
        return {
            store,
        }
    }
}
</script>

<template>
    <input v-model="store.movieText" type="text">
    <button @click="$emit(`search`)">Invia</button>
    
    <ul>
        <li v-for="film in store.movieList.results">
            <h2>Il titolo è:{{ film.title }}</h2>
            <h2>Il titolo originale è:{{ film.original_title }}</h2>
            <h2>Il voto è:{{ film.vote_average }}</h2>
            <h2>La lingua è:{{ film.original_language }}</h2>
        </li>
    </ul>
</template>