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

export const searchPerson = async (baseUrl,attore) => {

    //let attore = "clooney";

    const response = await fetch(baseUrl + "search/person" + "?query=" + attore,OPTS);

    const data = await response.json();

    return data;

}

export const getTrendingTv=async(baseUrl)=>{
    const response=await fetch("https://api.themoviedb.org/3/trending/tv/day?language=en-US",OPTS);
    const data=await response.json();
    return data;
}


export const searchMovie=async(baseUrl,nameMovie)=>{
    const response=await fetch("https://api.themoviedb.org/3/search/movie?query="+nameMovie,OPTS);
    const data=await response.json();
    return data;
}



