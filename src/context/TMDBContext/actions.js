import axios from 'axios';
import * as types from './types';

export const getTrendingMovies = async (dispatch) => {
  const request = await axios.get(`${process.env.REACT_APP_TRENDING}?${process.env.REACT_APP_API_KEY}`);
  const response = await request.data;
  //   obtendo os 5 primeiros filmes
  const topFive = response.results.filter((movie, index) => index <= 4);

  return () => dispatch({ type: types.GET_TRENDING_MOVIES, payload: topFive });
};

export const getGenreMovies = async (dispatch) => {};
