import { useParams } from 'react-router-dom';
import { getMovieById } from 'services/getMovieById';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { MovieInformation } from 'components/MovieInformation/MovieInformation';
import { Loader } from 'components/Loader/Loader';
import { ItemLink, LinkStyled } from './MovieDetails.styled';

export default function MovieDetails() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

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

  return (
    <div>
      <LinkStyled to={backLinkHref}>Back</LinkStyled>
      {loading && <Loader />}
      {error &&
        'There is some problems with loading this page. Please try to reload.'}
      {<MovieInformation movie={movie} />}
      <div>
        <h2>Additional information</h2>
        <ul>
          <ItemLink>
            <LinkStyled to={'cast'} state={{ from: location?.state?.from }}>
              Cast
            </LinkStyled>
          </ItemLink>

          <ItemLink>
            <LinkStyled to={'reviews'} state={{ from: location?.state?.from }}>
              Reviews
            </LinkStyled>
          </ItemLink>
        </ul>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}
