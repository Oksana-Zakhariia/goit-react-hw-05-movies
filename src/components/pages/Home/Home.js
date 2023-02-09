import { fetchTrendingFilms } from 'services/fetchTrendingFilms';
import { FilmList } from 'components/FilmList/FilmList';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { Title } from './Home.styled';

export default function Home() {
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
          'There is some problems with loading this page. Please try to reload.'
        );
      } finally {
        setLoading(false);
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <div>
      <Title> Trending today</Title>
      {loading && <Loader />}
      {error &&
        'There is some problems with loading this page. Please try to reload.'}
      <FilmList movies={movies}></FilmList>
    </div>
  );
}
