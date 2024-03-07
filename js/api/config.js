/*export const URL_BASE="https://api.themoviedb.org/3/";

export const OPTS = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_KEY} `
    },
}*/

export const URL_BASE="https://api.themoviedb.org/3/";

import dotenv from "dotenv";
dotenv.config();

export const OPTS = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_KEY}`
    },
}