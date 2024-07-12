<script>
import {store} from "../store.js";
import AppCard from "./AppCard.vue";

export default{
    name: "AppHeader",
    components: {
        AppCard
    },
    data(){
        return {
            store,
        }
    },
}
</script>

<template>
    <input v-model="store.movieText" type="text" @keyup.enter="$emit(`search`)">
    <button @click="$emit(`search`)">Invia</button>
    <AppCard/>
</template>

<style>

</style>