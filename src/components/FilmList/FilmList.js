import { Link } from 'react-router-dom';
export const FilmList = ({ movies }) => {
  return (
    <div>
      {' '}
      {movies && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`movies/${id}`}>
                <h2>{title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
