import API from "../../Helpers/API"
export const SELECTED_MOVIE_SUCCESS = 'SELECTED_MOVIE_SUCCESS'
export const SELECTED_MOVIE_FAILURE = 'SELECTED_MOVIE_FAILURE'
export const SELECTED_MOVIE = 'SELECTED_MOVIE'

export const fetchSelectedMovie = (id) => dispatch => {
    dispatch({ type: SELECTED_MOVIE })
    return API(`https://www.omdbapi.com/?t=${id}&apikey=4e1cdf4`)
        .then(json => dispatch({ type: SELECTED_MOVIE_SUCCESS, data: json }))
        .catch(err => dispatch({ type: SELECTED_MOVIE_FAILURE }))
}





