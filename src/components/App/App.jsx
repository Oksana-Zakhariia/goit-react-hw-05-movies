import { Routes, Route } from 'react-router-dom';
import { Home } from 'components/pages/Home/Home';
import { Movies } from 'components/pages/Movies/Movies';
import { MovieDetails } from '../pages/MovieDetails/MovieDetails';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';
import { NotFound } from 'components/pages/NotFound/NotFound';
import { useState } from 'react';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';

export const App = () => {
  const [query, setquery] = useState();
  console.log(query);
  const handleSubmit = name => {
    setquery(name);
  };
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies onSubmit={handleSubmit} />}>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
