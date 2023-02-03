import { Link, Outlet } from 'react-router-dom';
export const MovieDetails = () => {
  return (
    <div>
      MovieDetails
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
