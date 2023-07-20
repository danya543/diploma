/* eslint-disable @typescript-eslint/no-floating-promises   -- svme  */

import { useEffect, useState } from 'react';

import { allLists } from '~/api/Lists/allLists';
import { fetchList } from '~/api/Lists/fetchList';
import { ReactComponent as IconFaveEmpty } from '~/assets/icons/FavoritiesEmpty.svg';
import { type Poster } from '~/entities/Poster';
import { PosterCard } from '~/features/PosterCard/PosterCard';

import favoritStyle from './FavoritePage.module.scss';
import { LocalStorageKey } from '../constants/constants';

export const FavoritiesPage = () => {
  const [posts, setPosts] = useState<Poster[] | null>(null);

  const listId = localStorage.getItem(LocalStorageKey.listId);
  useEffect(() => {
    allLists().then((data) => {
      localStorage.setItem(
        LocalStorageKey.listId,
        data.pagination.data[0].id.toString()
      );
    });
    listId &&
      fetchList(listId)
        .then((data) => {
          setPosts(data.items.data);
        })
        .catch((error) => console.error(error));
  }, [listId]);

  return posts?.length === 0 ? (
    <div className={favoritStyle.container}>
      <IconFaveEmpty />
      <h2>Nothing added here</h2>
    </div>
  ) : (
    <div className={favoritStyle.content}>
      {posts?.map((post) => (
        <PosterCard
          key={post.id}
          post={post}
          chapter="titles"
        />
      ))}
    </div>
  );
};
/* eslint-enable @typescript-eslint/no-floating-promises   -- svme  */
