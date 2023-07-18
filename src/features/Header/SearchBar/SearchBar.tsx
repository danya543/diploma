import { useState } from 'react';

import { fetchSearch } from '~/api/fetchSearch';
import { ReactComponent as FilterIcon } from '~/assets/icons/Filter.svg';
//import { type Poster } from '~/entities/Poster';
import { Button } from '~/shared/ui/Button/Button';

import searchBarStyles from './SearchBar.module.scss';

export const SearchBar = () => {
  const [search, setSearch] = useState('');
  //const [results, setResults] = useState<Poster[]>([]);
  return (
    <form
      className={searchBarStyles.container}
      onSubmit={(event) => {
        event.preventDefault();
        fetchSearch({ query: search })
          .then((data) => {
            console.warn(data.results);
            //setResults(data);
          })
          .catch((error) => console.error(error));
      }}
    >
      <input
        placeholder="Search"
        id="search"
        value={search}
        onChange={({ target: { value } }) => setSearch(value)}
      />
      <Button
        iconLeft={<FilterIcon />}
        type="submit"
        appearance="secondary"
      />
    </form>
  );
};
