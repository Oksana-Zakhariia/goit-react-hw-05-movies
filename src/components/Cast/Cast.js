import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { fetchMovieCast } from 'services/fetchMovieCast';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId === '') {
      return;
    }
    const Content = async () => {
      try {
        setLoading(true);
        const data = await fetchMovieCast(movieId);
        setCast(data);
      } catch {
        setError('Sorry, we have no information');
      } finally {
        setLoading(false);
      }
    };
    Content();
  }, [movieId]);
  console.log(error);

  return (
    <div>
      {loading && <Loader />}
      <ul>
        {cast.map(item => (
          <li key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
              alt={item.name}
              width="150"
            />
            <h3>{item.name}</h3>
            <p>Character: {item.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Cast;
