import { configureStore } from '@reduxjs/toolkit';
import  movieData from "../features/searchMovie/reducers";

export const store = configureStore({
  reducer: { 
    movieData:movieData
  },
});
