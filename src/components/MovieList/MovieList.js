import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FilmLink } from './MovieList.styled';
import { FcFilmReel } from 'react-icons/fc';
export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      {movies && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <FilmLink to={`/movies/${id}`} state={{ from: location }}>
                <FcFilmReel size="24px" />
                <h2>{title}</h2>
              </FilmLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
