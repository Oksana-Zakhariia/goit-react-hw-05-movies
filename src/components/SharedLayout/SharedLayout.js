import { Outlet } from 'react-router-dom';
import { Header, Link, Container } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <h2> Enjoy your favorite movie</h2>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
        <Outlet />
      </Header>
    </Container>
  );
};
