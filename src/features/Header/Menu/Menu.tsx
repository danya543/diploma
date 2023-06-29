import { NavLink } from 'react-router-dom';

//import { ThemeSwitcher } from '~/features/Header/Menu/ThemeSwitcher';
import { NavLinks } from '~/features/Header/header.constants';
//import { ButtonAppearance } from '~/shared/ui/Button/Button.types';
//import { Button } from '~/shared/ui/Button/Button';

import menuStyles from './Menu.module.scss';

export const Menu = ({ isOpen }: { isOpen?: boolean }) => {
  return (
    <div
      className={menuStyles.container}
      data-open={isOpen}
    >
      <div>
        {NavLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) => (isActive ? menuStyles.active : '')}
          >
            {link.title}
          </NavLink>
        ))}
      </div>
      {/* <div>
        <ThemeSwitcher />
        {user && (
          <Button
            appearance={ButtonAppearance.Secondary}
            onClick={onLogout}
          >
            Log Out
          </Button>
        )}
      </div> */}
    </div>
  );
};
