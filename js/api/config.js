/*export const URL_BASE="https://api.themoviedb.org/3/";

export const OPTS = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_KEY} `
    },
}*/

export const URL_BASE="https://api.themoviedb.org/3/";

//import dotenv from "dotenv";
//dotenv.config();

export const OPTS = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        //Authorization: `Bearer ${process.env.API_KEY}`
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmFiOGM4ODczODNmYjA0ZTY0ZTY5MjgyYjNlMTFhZSIsInN1YiI6IjY1ZTg2YmI0OTYzODY0MDBjOWM4MDQzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gSOmMLo8VrH9c77B5Hr-Okjba5JBvD-DqiMxy_t_02A`
    },
}