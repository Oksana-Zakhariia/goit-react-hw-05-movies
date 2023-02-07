import { fetchTrendingFilms } from 'services/fetchTrendingFilms';
import { FilmList } from 'components/FilmList/FilmList';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
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
          'There is some problems with lisding this page. Please try to reload.'
        );
      } finally {
        setLoading(false);
      }
    };
    getTrendingMovies();
  }, []);
  console.log(error);

  return (
    <div>
      <h1> Trending today</h1>
      {loading && <Loader />}
      <FilmList movies={movies}></FilmList>
    </div>
  );
};
export default Home;
