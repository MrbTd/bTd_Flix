import axios from "axios";
export const initialState = {}
export const baseUrl = "https://api.themoviedb.org/3";
const REACT_APP_APP_KEY = "a5572daa947c0a33ceb22a77ae059c01"

export const img_300 = "https://image.tmdb.org/t/p/w300";
export const img_500 = "https://image.tmdb.org/t/p/w500";




export const handleGetPopularMovie = () => {
    const results = axios.get(`${baseUrl}/trending/all/day?api_key=${REACT_APP_APP_KEY}&page=1&language=fr`)
    return results
}


export const handleGetGenreMovie = (genre: string) => {
    const results = axios.get(`${baseUrl}/discover/movie?api_key=${REACT_APP_APP_KEY}&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}`)
    return results
}