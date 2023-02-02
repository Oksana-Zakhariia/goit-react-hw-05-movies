import { fetchTrendingFilms } from 'services/fetchTrendingFilms';
import { FilmList } from 'components/FilmList/FilmList';
import { useEffect, useState } from 'react';
import { fetchMoviesByName } from 'services/fetchMoviesByName';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        setLoading(true);
        const response = await fetchTrendingFilms();
        setMovies(response.results);
      } catch {
        setError(
          'There is some problems with lisding this page. please try to reload.'
        );
      } finally {
        setLoading(false);
      }
    };
    getTrendingMovies();
  }, []);

  return <FilmList films={movies}></FilmList>;
};

const getMovies = async () => {
  try {
    const response = await fetchMoviesByName();
    console.log(response);
  } catch {
  } finally {
  }
};

getMovies();
