import { useEffect, useState } from 'react';

import { format } from 'date-fns';
import { useParams } from 'react-router-dom';

import { fetchPoster, type PosterResponse } from '~/api/fetchPoster';
import { ReactComponent as Bookmark } from '~/assets/icons/Favorites.svg';
import { ReactComponent as Share } from '~/assets/icons/Share.svg';
import { Button } from '~/shared/ui/Button/Button';

import filmStyles from './FilmPage.module.scss';

export const FilmPage = () => {
  const [post, setPosts] = useState<PosterResponse | null>(null);
  const { id } = useParams<'id'>();

  useEffect(() => {
    if (id && !Number.isNaN(+id)) {
      fetchPoster(id)
        .then((data) => setPosts(data))
        .catch((error) => console.error(error));
    }
  }, []);

  let castomerString = '';
  post?.title.credits.map(
    (person) =>
      person.pivot.department == 'cast' &&
      (castomerString += (castomerString ? ', ' : '') + person.name)
  );

  return post ? (
    <div className={filmStyles.container}>
      <div className={filmStyles.poster}>
        <img
          src={post?.title.poster}
          alt=""
        />
        <Button
          appearance="secondary"
          iconLeft={<Bookmark />}
        />
        <Button
          appearance="secondary"
          iconLeft={<Share />}
        />
      </div>
      <div className={filmStyles.information}>
        <div className={filmStyles.header}>
          <div className={filmStyles.genres}>
            {post?.title.genres.map((item) => (
              <p key={item.id}> {item.display_name}</p>
            ))}
          </div>
          <h1>{post.title.name}</h1>
          <span>{post.title.tagline}</span>
          <div className={filmStyles.rating}>
            <p>{post.title.rating}</p>
            <p>{post.title.runtime} min</p>
          </div>
        </div>
        <div className={filmStyles.credits}>
          <p>
            {(post.title.description && post.title.description) ||
              'No description'}
          </p>
          <p>
            <span>Released </span>
            {format(new Date(post.title.release_date), 'dd MMMM yyyy')}
          </p>
          {post.title.revenue && (
            <p>
              <span>BoxOffice </span>
              {post.title.revenue}$
            </p>
          )}
          <div className={filmStyles.castomers}>
            <span>{castomerString ? 'Castomers' : ''}</span>
            {castomerString ? <p>{castomerString}</p> : ''}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};
