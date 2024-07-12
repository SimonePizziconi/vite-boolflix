<script>
import {store} from "../store.js";

export default{
    name: "AppCardFilm",
    props: {
        movies: Array,
        tvSeries: Array,
        getFlagClass: Function,
        convertVoteToFiveScale: Function,
        fullImageUrl: Function
    },
    data(){
        return {
            store,
        }
    },
}
</script>

<template>
    <div class="card-container" v-for="film in store.movieList">
        <img :src="fullImageUrl(film.poster_path)" alt="">
        <div class="card-text">
            <h2>Il titolo è:{{ film.title }}</h2>
            <h2>Il titolo originale è:{{ film.original_title }}</h2>
            <span :class="getFlagClass(film.original_language)"></span>
            <div class="stars">
                <span v-for="star in 5" :key="star" class="star" :class="{ selected: star <= convertVoteToFiveScale(film.vote_average) }">&#9733;</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .card-container{
        width: calc(100% / 3 - 20px);

        img{
            width: 100%;
        }
    }

    .star {
        font-size: 10px;
        color: gray;
    }   

    .star.selected {
        color: gold;
    }
</style>