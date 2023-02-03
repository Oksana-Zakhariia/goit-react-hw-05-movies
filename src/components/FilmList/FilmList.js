import { Link } from 'react-router-dom';
export const FilmList = ({ films, onClick }) => {
  return (
    <div>
      {films.map(film => (
        <li key={film.id}>
          <Link to={`${film.id}`}>
            <img src={film.poster_path} alt={film.title}></img>
            <h2>{film.title}</h2>
          </Link>
        </li>
      ))}
    </div>
  );
};
