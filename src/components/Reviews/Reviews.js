import { fetchMovieReviews } from 'services/fetchMovieReviews';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (movieId === '') return;
    const getReviews = async () => {
      try {
        setLoading(true);
        const data = await fetchMovieReviews(movieId);
        setReviews(data.data.results);
      } catch {
        setError('There is no reviews yet.');
      } finally {
        setLoading(false);
      }
    };
    getReviews();
  }, [movieId]);
  console.log(error);
  console.log(reviews);

  return (
    <>
      {loading && <Loader />}
      {reviews.length !== 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h2>There is no reviews yet.</h2>
      )}
    </>
  );
};
export default Reviews;
