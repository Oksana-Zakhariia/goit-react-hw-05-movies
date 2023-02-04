import { useParams } from 'react-router-dom';
import { getMovieById } from 'services/getMovieById';
import { Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(error);
  console.log(loading);

  useEffect(() => {
    const getFilmById = async id => {
      try {
        setLoading(true);
        const response = await getMovieById(id);
        setMovie(response);
        console.log(response);
        if (response.success) {
          navigate('/movies/:movieId', { replace: true });
        }
      } catch {
        setError(
          'There is some problems with lisding this page. please try to reload.'
        );
      } finally {
        setLoading(false);
      }
    };
    console.log(useParams);
    getFilmById();
  }, [id, navigate]);

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
