import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';

const Layout = () => {
  return (
    <div className="Container">
      <Header />

      <main>
        <Suspense fallback={<div>loading..</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
