import { urlBase } from "./config.js";

const url = "https://api.themoviedb.org/3/trending/all/day?language=en-US";

const opts = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmFiOGM4ODczODNmYjA0ZTY0ZTY5MjgyYjNlMTFhZSIsInN1YiI6IjY1ZTg2YmI0OTYzODY0MDBjOWM4MDQzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gSOmMLo8VrH9c77B5Hr-Okjba5JBvD-DqiMxy_t_02A"
    },
}
export const getTrending = async (baseUrl) => {

    const response = await fetch(baseUrl + "trending/all/day?language=en-US", opts);

    const data = await response.json();

    return data;

}


/**getTrendingMovies
 * 
 * @param urlBase
 * @returns trandingMovies
 * 
 */

export const getTrendingMovies = async (baseUrl) => {

    const response = await fetch(baseUrl + "trending/movie/day?language=en-US", opts);

    const data = await response.json();

    return data;

}

/**
 * 
 * @function cercaPersona
 * 
 */

export const searchPerson = async (baseUrl) => {

    let attore = "clooney";

    const response = await fetch(baseUrl + "search/person" + "?query=" + attore,opts);

    const data = await response.json();

    return data;

}



