import {getTrending,getTrendingMovies,searchPerson} from "./api/trendingGetters.js";
import { URL_BASE } from "./api/config.js";
import { configDotenv } from "dotenv";

/**
 * poster_path
 * title
 * vote_average
 * media_type
 * release_date
 * id
 */
getTrending(URL_BASE)
.then((data)=>{
    data.results.forEach((element) => {
        switch(element.media_type){
            case "movie":
        let titolo=element.title;
        console.log("titolo: "+titolo);
        break;
            case "tv":
        let nome=element.name;
                console.log("nome: "+nome);
                break;
        }
        let id=element.id;
        console.log("id:"+id);

        let poster_path=element.poster_path;
        console.log("poster path:"+poster_path);

        let media_type=element.media_type;
        console.log("media type: "+media_type);

        let release_date=element.release_date;
        console.log("release date:"+release_date);
        
    });
});

getTrendingMovies(URL_BASE);

searchPerson(URL_BASE);

