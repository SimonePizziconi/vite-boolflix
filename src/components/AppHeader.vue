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
    <header>
        <!-- Titolo -->
        <h1>
            BOOLFIX
        </h1>

        <!-- Contenitore tool di ricerca -->
        <div class="console-search">
            <input v-model="store.movieText" type="text" @keyup.enter="$emit(`search`)" placeholder="Cerca un nuovo film">
            <button @click="$emit(`search`)">Cerca</button>
        </div>
    </header>
    
</template>

<style lang="scss" scoped>
@use "../src/style/partials/variables.scss" as *;
@use "../src/style/partials/mixins.scss" as *;

    header{
        height: 100px;
        background-color: $second_color;
        @include centerFlex();
        justify-content: space-between;
        color: $text_color;

        h1{
            margin-left: 10px;
        }

        .console-search{

            margin-right: 10px;


            input{
                padding: 10px;
                border: none;
            }

            button{
                background-color: #fff;
                color: $second_color;
                border: none; 
                border-radius: 10px; 
                cursor: pointer;
                padding: 10px;
                margin-left: 10px;
            }
        }
        
    }
</style>