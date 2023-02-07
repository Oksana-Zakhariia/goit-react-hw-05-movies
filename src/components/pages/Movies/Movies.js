import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByName } from 'services/fetchMoviesByName';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { MovieList } from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('query');
  const handleSubmit = query => {
    setSearchParams({ query: query });
  };

  useEffect(() => {
    if (!query) {
      console.log('there is no query');
      return;
    }
    const getMoviesByName = async () => {
      try {
        setLoading(true);
        const data = await fetchMoviesByName(query);
        setMovies(data);
      } catch {
        setError(
          'There is some problems with lisding this page. Please try to reload.'
        );
      } finally {
        setLoading(false);
      }
    };
    getMoviesByName();
  }, [query]);
  console.log(error);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      {loading && <Loader />}
      <SearchBar
        onSubmit={handleSubmit}
        onChange={updateQueryString}
        value={query}
      ></SearchBar>
      <MovieList movies={movies} />
    </>
  );
};
export default Movies;
