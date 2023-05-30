import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import { Container, Main } from './Layout.styled';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from 'components/Loader/Loader';

const Layout = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
};

export default Layout;
