import { Link } from 'react-router-dom';
export const FilmList = ({ movies, onClick }) => {
  return (
    <div>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`movies/${id}`}>
            {/* <img src={film.poster_path} alt={film.title}></img> */}
            <h2>{title}</h2>
          </Link>
        </li>
      ))}
    </div>
  );
};
