import axios from "axios";
import qs from "qs";
import { APP_KEY, BASE_URL, TYPE } from "../services/api.js";

export const getMovies = async (movie) => {
    const url = BASE_URL + "movie/{movie_id}" + APP_KEY;

    try {
        const params = {
            q: movie,
            // app_id: APP_ID,
            app_key: APP_KEY,
            type: TYPE,
            field: ["uri", "image", "label", "source"],
        };

        const movieAxios = axios.create({
            paramsSerializer: (params) =>
                qs.stringify(params, { arrayFormat: "repeat" }),
        });

        const response = await movieAxios.get(url, { params });

        const movies = response.data;

        console.log("movies", movies);

        return movies;
    } catch (error) {
        throw error;
    }
};
