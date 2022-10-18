const API = '30b72a2c';

//CREADOR DE ACTION SYNCRONO
export function addMovieFavorite(payload) {
    return {
        type: "ADD_MOVIE_FAVORITE",
        payload
    };
}

//removeMovieFavorite

export function removeMovieFavorite(payload) {
    return {
        type: "REMOVE_MOVIE_FAVORITE",
        payload
    };
}

//CREADOR DE ACTION ASYNCRONO
export function getMovies(titulo) {
    return dispatch => {
        return fetch(`http://www.omdbapi.com/?apikey=${API}&s=${titulo}`)
        .then(response => response.json())
        .then(json => {
            // console.log(json);
            dispatch({ 
                type: "GET_MOVIES",
                payload: json 
            });
        });
    };
}

//getMovieDetail
export function getMovieDetail(id) {
    return dispatch => {
        return fetch(`http://www.omdbapi.com/?apikey=${API}&i=${id}`)
        .then(response => response.json())
        .then(json => {
            dispatch({ 
                type: "GET_MOVIE_DETAIL",
                payload: json 
            });
        });
    };
}