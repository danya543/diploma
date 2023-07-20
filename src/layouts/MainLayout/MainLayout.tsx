import { Outlet } from 'react-router-dom';

import { AsideMenu } from '~/features/AsideMenu/AsideMenu';
import { Footer } from '~/features/Footer/Footer';
import { Header } from '~/features/Header/Header';

import mainLayoutStyles from './MainLayout.module.scss';

export const MainLayout = () => {
  return (
    <div className={mainLayoutStyles.container}>
      <main>
        <AsideMenu />
        <section>
          <Header />
          <Outlet />
        </section>
      </main>
      <Footer />
    </div>
  );
};
