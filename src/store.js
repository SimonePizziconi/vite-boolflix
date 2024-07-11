import { reactive } from "vue"

export const store = reactive ({
    // Array da popolare con api ed il suo URL
    movieList: [],
    apiURL: "https://api.themoviedb.org/3/search/movie?api_key=2ad3d2dedcef1aaf835ebff23ac5b7de&query=",
    movieText: "",

});