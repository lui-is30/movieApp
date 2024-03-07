import { URL_BASE,OPTS } from "./config.js";

const url = "https://api.themoviedb.org/3/trending/all/day?language=en-US";

export const getTrending = async (baseUrl) => {

    const response = await fetch(baseUrl + "trending/all/day?language=en-US", OPTS);

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

    const response = await fetch(baseUrl + "trending/movie/day?language=en-US", OPTS);

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

    const response = await fetch(baseUrl + "search/person" + "?query=" + attore,OPTS);

    const data = await response.json();

    return data;

}


