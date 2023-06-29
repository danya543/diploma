import { Outlet } from 'react-router-dom';

import { ReactComponent as Logo } from '~/assets/icons/logo.svg';

import signLayoutStyles from './SignLayout.module.scss';

export const SignLayout = () => {
  return (
    <div className={signLayoutStyles.container}>
      <Logo />
      <main>
        <section>
          <Outlet />
        </section>
      </main>
    </div>
  );
};
