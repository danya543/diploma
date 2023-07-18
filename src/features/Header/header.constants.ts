import { ReactComponent as Favorites } from '~/assets/icons/Favorites.svg';
import { ReactComponent as Home } from '~/assets/icons/Home.svg';
import { ReactComponent as Setting } from '~/assets/icons/Setting.svg';
import { ReactComponent as Trends } from '~/assets/icons/Trends.svg';

export const NavLinks = [
  {
    path: '/',
    title: 'Home',
    icon: Home
  },
  {
    path: '/news',
    title: 'News',
    icon: Trends
  },
  {
    path: '/favorities',
    title: 'Favorities',
    icon: Favorites
  },
  {
    path: '/settings',
    title: 'Settings',
    icon: Setting
  }
] as const;
