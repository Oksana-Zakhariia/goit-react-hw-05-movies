import { useParams } from 'react-router-dom';
import { getMovieById } from 'services/getMovieById';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { MovieInformation } from 'components/MovieInformation/MovieInformation';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    if (movieId === '') {
      return;
    }
    const Film = async () => {
      try {
        setLoading(true);
        const response = await getMovieById(movieId);
        setMovie(response);
      } catch {
        setError(
          'There is some problems with loading this page. Please try to reload.'
        );
      } finally {
        setLoading(false);
      }
    };

    Film();
  }, [movieId]);
  console.log(error);

  return (
    <div>
      <Link to={backLinkHref}>Back</Link>
      {loading && <Loader />}
      {<MovieInformation movie={movie} />}
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to={'cast'} state={{ from: location?.state?.from }}>
              Cast
            </Link>
          </li>

          <li>
            <Link to={'reviews'} state={{ from: location?.state?.from }}>
              Reviews
            </Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
export default MovieDetails;
