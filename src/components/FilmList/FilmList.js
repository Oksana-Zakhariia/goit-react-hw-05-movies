import { Film, FilmLink } from './FilmList.styled';
import { PropTypes } from 'prop-types';
import { FcFilmReel } from 'react-icons/fc';

export const FilmList = ({ movies }) => {
  return (
    <div>
      {movies && (
        <ul>
          {movies.map(({ id, title }) => (
            <Film key={id}>
              <FilmLink to={`movies/${id}`}>
                <FcFilmReel size="24px" />
                <h2>{title}</h2>
              </FilmLink>
            </Film>
          ))}
        </ul>
      )}
    </div>
  );
};
FilmList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
