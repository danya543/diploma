import { ReactComponent as FilterIcon } from '~/assets/icons/Filter.svg';
import { Button } from '~/shared/ui/Button/Button';

import searchBarStyles from './SearchBar.module.scss';

export const SearchBar = () => {
  return (
    <form
      className={searchBarStyles.container}
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <input placeholder="Search" />
      <Button
        iconLeft={<FilterIcon />}
        type="submit"
        appearance="secondary"
      />
    </form>
  );
};
