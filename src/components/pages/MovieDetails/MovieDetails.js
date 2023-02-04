import { useParams } from 'react-router-dom';
import { getFilmById } from 'services/getFilmById';
import { Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const MovieDetails = filmId => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const getMovieById = async id => {
      try {
        setLoading(true);
        const response = await getFilmById(505642);
        setMovie(response);
        console.log(response);
      } catch {
        setError(
          'There is some problems with lisding this page. please try to reload.'
        );
      } finally {
        setLoading(false);
      }
    };
    console.log(useParams);
    getMovieById();
  }, [id]);

  return (
    <div>
      MovieDetails about film - {movie.title}
      <ul>
        <li>
          <Link to="cast">Read about cast</Link>
        </li>

        <li>
          <Link to="reviews">Go through the reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
