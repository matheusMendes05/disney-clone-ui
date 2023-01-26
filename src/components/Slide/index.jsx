import './styles.css';
import { useContext, useEffect, useRef } from 'react';
import { getTrendingMovies } from '../../context/TMDBContext/actions';
import { TMDBContext } from '../../context/TMDBContext/context';

import ArrowBackIosOutlined from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import { SlideImage } from '../SlideImage';

export const Slide = () => {
  const isMounted = useRef(true);
  const tmdbContext = useContext(TMDBContext);
  const { movieState, movieDispatch } = tmdbContext;

  useEffect(() => {
    getTrendingMovies(movieDispatch).then((dispatch) => {
      if (!isMounted.current) {
        dispatch();
      }
    });

    return () => {
      isMounted.current = false;
    };
  }, [movieDispatch]);

  return (
    <div className="">
      <h1>Carousel</h1>
    </div>
  );
};

// {movieState.trendingMovies.map((movie) => (
//     <img key={movie.id} src={process.env.REACT_APP_IMG + movie.backdrop_path} alt="" srcSet="" />
//   ))}

{
  /* <img src="https://image.tmdb.org/t/p/w500/5kAGbi9MFAobQTVfK4kWPnIfnP0.jpg" alt="teste" /> */
}
