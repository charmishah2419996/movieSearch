
export const REMOVE_SELECTED_MOVIE = 'REMOVE_SELECTED_MOVIE'



export const removeSelectedMovie = (txt) => dispatch => {
    dispatch({ type: REMOVE_SELECTED_MOVIE,value:txt });
}