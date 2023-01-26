import * as types from './types';

export const reducer = (state, action) => {
  switch (action.type) {
    case types.GET_TRENDING_MOVIES: {
      return { ...state, trendingMovies: action.payload };
    }
    case types.GET_GENRE_MOVIES: {
      return { ...state };
    }
  }
};
