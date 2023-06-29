import { ReactComponent as Logo } from '~/assets/icons/logo.svg';
import { Menu } from '~/features/Header/Menu/Menu';

import asideStyles from './AsideMenu.module.scss';

export const AsideMenu = () => {
  return (
    <aside className={asideStyles.container}>
      <Logo />
      <Menu />
    </aside>
  );
};
