import { NavLink } from 'react-router-dom';

import { NavLinks } from '~/features/Header/header.constants';
//import { ButtonAppearance } from '~/shared/ui/Button/Button.types';

import menuStyles from './Menu.module.scss';

export const Menu = ({
  isOpen,
  reOpen
}: {
  isOpen?: boolean;
  reOpen?: () => void;
}) => {
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
            onClick={reOpen}
            className={({ isActive }) => (isActive ? menuStyles.active : '')}
          >
            <link.icon />
            {link.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
