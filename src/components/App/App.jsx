import { Routes, Route, NavLink } from 'react-router-dom';
import { Home } from 'components/pages/Home/Home';
import { Movies } from 'components/pages/Movies/Movies';
import { MovieDetails } from '../pages/MovieDetails/MovieDetails';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';
import { NotFound } from 'components/pages/NotFound/NotFound';
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';

export const App = () => {
  const [query, setquery] = useState();
  const handleSubmit = name => {
    console.log(query);
    setquery(name);
    console.log(name);
  };
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/movies/:movieId">MovieDetails</NavLink>
        {/* <NavLink to="/movies/:movieId/cast">Cast</NavLink>
        <NavLink to="/movies/:movieId/reviews">Reviews</NavLink> */}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies onSubmit={handleSubmit} />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer autoClose={3000} />
    </div>
  );
};
