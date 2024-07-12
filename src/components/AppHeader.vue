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
        <h1>
            BOOLFIX
        </h1>
        <div class="console-search">
            <input v-model="store.movieText" type="text" @keyup.enter="$emit(`search`)" placeholder="Cerca un nuovo film">
            <button @click="$emit(`search`)">Cerca</button>
        </div>
    </header>
    
</template>

<style lang="scss" scoped>

    header{
        height: 100px;
        background-color: #0c0c0c;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #e50914;

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
                color: #0c0c0c;
                border: none; 
                border-radius: 10px; 
                cursor: pointer;
                padding: 10px;
                margin-left: 10px;
            }
        }
        
    }
</style>