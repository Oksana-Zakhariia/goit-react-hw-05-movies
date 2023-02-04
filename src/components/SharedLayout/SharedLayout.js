import { NavLink, Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <header>
      <h2> Enjoy your favorite movie</h2>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Outlet />
    </header>
  );
};
