import {getTrending,getTrendingMovies,searchPerson} from "./api/trendingGetters.js";
import { URL_BASE } from "./api/config.js";

getTrending(URL_BASE);

getTrendingMovies(URL_BASE);

searchPerson(URL_BASE);