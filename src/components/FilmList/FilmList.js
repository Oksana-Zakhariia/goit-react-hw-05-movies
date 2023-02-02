import { Link } from 'react-router-dom';
export const FilmList = ({ films }) => {
  return (
    <div>
      {films.map(film => (
        <li key={film.id}>
          <Link to={`${film.id}`}>'</Link>
          <img src={film.poster_path} alt={film.title}></img>
          <h2>{film.title}</h2>
        </li>
      ))}
    </div>
  );
};
