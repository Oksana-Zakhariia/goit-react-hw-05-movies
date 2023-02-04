import { NavLink, Outlet } from 'react-router-dom';
import { Navigation } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <header>
      <h2> Enjoy your favorite movie</h2>
      <Navigation>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </Navigation>
      <Outlet />
    </header>
  );
};
