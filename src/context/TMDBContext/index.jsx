import { useReducer } from 'react';
import { TMDBContext } from './context';
import { data } from './data';
import { reducer } from './reducer';

export const TMDBProvider = ({ children }) => {
  const [movieState, movieDispatch] = useReducer(reducer, data);

  return <TMDBContext.Provider value={{ movieState, movieDispatch }}>{children}</TMDBContext.Provider>;
};
