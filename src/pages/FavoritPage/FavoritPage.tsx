import { ReactComponent as IconFaveEmpty } from '~/assets/icons/FavoritiesEmpty.svg';

import favoritStyle from './FavoritePage.module.scss';

export const FavoritiesPage = () => {
  return (
    <div className={favoritStyle.container}>
      <IconFaveEmpty />
      <h2>Nothing added here</h2>
    </div>
  );
};
