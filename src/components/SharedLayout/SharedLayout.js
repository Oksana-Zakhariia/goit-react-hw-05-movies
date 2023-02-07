import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Link, Container } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <h2> Enjoy your favorite movie</h2>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default SharedLayout;
