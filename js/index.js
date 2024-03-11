import { getTrending, getTrendingMovies, searchPerson } from "./api/trendingGetters.js";
import { URL_BASE } from "./api/config.js";

export{fixTitle,addParagraph} from"../utils/dom.js";
export{getTrendingMovies,getTrending} from "./api/trendingGetters.js";
export{ URL_BASE } from "./api/config.js";
export{createMovieTitleList,createMovieView} from "./domManipulator/createList.js"

/**
 * poster_path
 * title
 * vote_average
 * media_type
 * release_date
 * id
 */

getTrending(URL_BASE)
    .then((data) => {
        data.results.forEach((element) => {
            switch (element.media_type) {
                case "movie":
                    console.log("\n FILM: \n");
                    let titolo = element.title;
                    console.log("titolo: " + titolo);

                    let release_date = element.release_date;
                    console.log("release date:" + release_date);
                    break;
                case "tv":
                    console.log("\n SERIE TV: \n");
                    let nome = element.name;
                    console.log("nome: " + nome);

                    let firstAirDate = element.first_air_date;
                    console.log(firstAirDate);
                    break;
            }
            let id = element.id;
            console.log("id:" + id);

            let poster_path = element.poster_path;
            console.log("poster path:" + poster_path);

            let media_type = element.media_type;
            console.log("media type: " + media_type);


        });
    });

getTrendingMovies(URL_BASE);


searchPerson(URL_BASE);

