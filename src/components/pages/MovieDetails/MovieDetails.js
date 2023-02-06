import { useParams } from 'react-router-dom';
import { getMovieById } from 'services/getMovieById';
import { Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  console.log(error);
  console.log(loading);

  useEffect(() => {
    const getFilmById = async () => {
      try {
        setLoading(true);
        const response = await getMovieById(id);
        setMovie(response);
        console.log(response);
      } catch {
        setError(
          'There is some problems with lisding this page. Please try to reload.'
        );
      } finally {
        setLoading(false);
      }
    };

    getFilmById();
  }, [id]);
  console.log(movie);

  return (
    <div>
      {movie && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
          <h2>
            {movie.title} <span>{movie.release_date} </span>
          </h2>
          <p>User score {Number.parseInt(movie.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{movie.overview} </p>
          <h3> Genres</h3>
          {/* <p>{movie.genres.map(genre => genre.name).join(' ')}</p> */}
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
      )}
    </div>
  );
};
