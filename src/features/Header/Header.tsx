//import { useState } from 'react';

//import { useUserContext } from '~/contexts/UserContext/userContext';
import { SearchBar } from '~/features/Header/SearchBar/SearchBar';
import { UserPanel } from '~/features/Header/UserPanel/UserPanel';

import headerStyles from './Header.module.scss';

export const Header = () => {
  //const [isOpen, setIsOpen] = useState(false);
  //const { user, logout } = useUserContext();

  /* const toggleMenu = () => {
    setIsOpen((hasBeenOpened) => !hasBeenOpened);
  }; */

  return (
    <nav className={headerStyles.container}>
      <SearchBar />
      <UserPanel />
      {/* <MenuButton
        onClick={toggleMenu}
        isOpen={isOpen}
      /> */}
    </nav>
  );
};
