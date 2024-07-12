<script>
import {store} from "../store.js";


export default{
    name: "AppHeader",
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
</template>

<style>

</style>