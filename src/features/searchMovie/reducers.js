import { REMOVE_SELECTED_MOVIE } from '../modalBox/actions'
import {SELECTED_MOVIE_SUCCESS } from './actions'

const movieData = (state = { movie: {}, url: "" }, action) => {

    switch (action.type) {
        case SELECTED_MOVIE_SUCCESS:
          return { ...state, movie: action.data }; 
        case REMOVE_SELECTED_MOVIE:
          return { ...state, movie: "" }; 
                
        default:
          return state
    }
}

export default movieData


