import {getTrending,getTrendingMovies,searchPerson} from "./api/trendingGetters.js";
import { urlBase } from "./api/config.js";

getTrending(urlBase);

getTrendingMovies(urlBase);

searchPerson(urlBase);


