<script>
import {store} from "../store.js";

export default{
    name: "AppCardTvSeries",
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
    <ul class="tv-series">
        <li v-for="series in store.tvSeriesList">
            <img :src="fullImageUrl(series.poster_path)" alt="">
            <h2>il titolo è: {{ series.name }}</h2>
            <h2>Il titolo originale è:{{ series.original_name }}</h2>
            <span :class="getFlagClass(series.original_language)"></span>
            <div class="stars">
                <span v-for="star in 5" :key="star" class="star" :class="{ selected: star <= convertVoteToFiveScale(series.vote_average) }">&#9733;</span>
            </div>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
    .star {
        font-size: 10px;
        color: gray;
    }   

    .star.selected {
        color: gold;
    }
</style>