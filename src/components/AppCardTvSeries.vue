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
    <!-- Contenitore carta -->
    <div class="card-container" v-for="series in store.tvSeriesList">
        <div class="flip-card-inner">
            <!-- contenitore immagine -->
            <div class="img-container">
                <img :src="fullImageUrl(series.poster_path)" alt="">
            </div>
            <!-- contenitore testo -->
            <div class="card-text">
                <h2>Titolo: {{ series.title }}</h2>
                <h2>Titolo originale: {{ series.original_title }}</h2>
                <span :class="getFlagClass(series.original_language)"></span>
                <div class="stars">
                    Voto: <span v-for="star in 5" :key="star" class="star" :class="{ selected: star <= convertVoteToFiveScale(series.vote_average) }">&#9733;</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../src/style/partials/variables.scss" as *;
@use "../src/style/partials/mixins.scss" as *;

    .card-container {
    width: calc(100% / 3 - 20px);
    perspective: 1000px;
    height: 500px;
    
        &:hover .flip-card-inner {
            transform: rotateY(180deg);
        }

        .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;

            .img-container, .card-text {
                position: absolute;
                width: 100%;
                height: 100%;
                backface-visibility: hidden;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            .card-text {
                background-color: $second_color;
                color: white;
                transform: rotateY(180deg);
                @include centerFlex();
                flex-direction: column;

                .star {
                    font-size: 20px;
                    color: gray;
                }

                .star.selected {
                    color: gold;
                }
            }
        }
    }
</style>