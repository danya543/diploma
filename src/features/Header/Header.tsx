import { useState } from 'react';

import { ReactComponent as Cancel } from '~/assets/icons/Burger-Cancel.svg';
import { ReactComponent as Burger } from '~/assets/icons/burger.svg';
import { SearchBar } from '~/features/Header/SearchBar/SearchBar';
import { UserPanel } from '~/features/Header/UserPanel/UserPanel';
import { Button } from '~/shared/ui/Button/Button';

import headerStyles from './Header.module.scss';
import { Menu } from './Menu/Menu';

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu((hasBeenOpened) => !hasBeenOpened);
  };

  return (
    <nav className={headerStyles.container}>
      <SearchBar />
      <UserPanel />
      <div className={headerStyles.menu}>
        <Button
          onClick={toggleMenu}
          iconLeft={isOpenMenu ? <Cancel /> : <Burger />}
        />
        <Menu
          isOpen={isOpenMenu}
          reOpen={toggleMenu}
        />
      </div>
    </nav>
  );
};
