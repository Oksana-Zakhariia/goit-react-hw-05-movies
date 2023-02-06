import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByName } from 'services/fetchMoviesByName';

import { SearchBar } from 'components/SearchBar/SearchBar';
import { FilmList } from 'components/FilmList/FilmList';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('query');
  console.log(query);
  const handleSubmit = query => {
    console.log(query);
    setSearchParams({ query });
  };

  useEffect(() => {
    const getMoviesByName = async () => {
      if (query === '') {
        return;
      }
      try {
        setLoading(true);
        const response = await fetchMoviesByName(query);
        setMovies(response.results);
      } catch {
        setError(
          'There is some problems with lisding this page. please try to reload.'
        );
      } finally {
        setLoading(false);
      }
    };
    getMoviesByName();
  }, [query]);

  return (
    <>
      <SearchBar onSubmit={handleSubmit}></SearchBar>;
      <FilmList movies={movies} />
    </>
  );
};
// Movies.propTypes = { onSubmit: PropTypes.func.isRequired };
