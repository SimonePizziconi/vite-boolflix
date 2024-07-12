import { reactive } from "vue"

export const store = reactive ({
    // Array da popolare con api ed il suo URL per i film
    movieList: [],
    apiURL: "https://api.themoviedb.org/3/search/movie?api_key=2ad3d2dedcef1aaf835ebff23ac5b7de&query=",

    // Array da popolare con api ed il suo url per le serie tv
    tvSeriesList: [],
    tvApiURL: "https://api.themoviedb.org/3/search/tv?api_key=2ad3d2dedcef1aaf835ebff23ac5b7de&language=it_IT&query=",
    movieText: "",

});