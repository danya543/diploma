/* eslint-disable unicorn/prefer-query-selector  --- ктущтиу */
/* eslint-disable @typescript-eslint/no-misused-promises  --- ктущтиу */
/* eslint-disable @typescript-eslint/no-unsafe-assignment  --- ктущтиу */
import { useEffect, useState } from 'react';

import classNames from 'classnames';
import { format } from 'date-fns';
import { useParams } from 'react-router-dom';

import { fetchPoster, type PosterResponse } from '~/api/fetchPoster';
import { ReactComponent as Bookmark } from '~/assets/icons/Favorites.svg';
import { ReactComponent as LeftArrow } from '~/assets/icons/IconChevronLeftPag.svg';
import { ReactComponent as Share } from '~/assets/icons/Share.svg';
import { Loader } from '~/features/Loader/Loader';
import { Button } from '~/shared/ui/Button/Button';

import filmStyles from './FilmPage.module.scss';
import { share, booked, LocalStorageKey } from '../constants/constants';

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

  const savedPosts = localStorage.getItem(LocalStorageKey.book);
  const favorities: string[] = savedPosts ? JSON.parse(savedPosts) : [];
  const stringId = post?.title.id.toString() as string;
  const isBooked = favorities.includes(stringId);

  return post ? (
    <div className={filmStyles.all}>
      <Button
        text={'Back'}
        iconLeft={<LeftArrow />}
        onClick={() => {
          history.back();
        }}
      />
      <div className={filmStyles.container}>
        <div
          className={classNames({
            [filmStyles.poster]: true,
            [filmStyles.booked]: isBooked
          })}
        >
          <img
            src={post?.title.poster}
            alt=""
          />

          <Button
            appearance="secondary"
            iconLeft={<Bookmark />}
            onClick={() => {
              booked(post.title.id.toString());
              document
                .getElementsByClassName(filmStyles.poster)[0]
                .classList.toggle(filmStyles.booked);
            }}
          />
          <Button
            appearance="secondary"
            iconLeft={<Share />}
            onClick={share}
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
              <p
                className={classNames({
                  [filmStyles.rating]: true,
                  [filmStyles.ratingBest]:
                    Number.parseInt(post.title.rating) >= 6,
                  [filmStyles.ratingGood]:
                    Number.parseInt(post.title.rating) >= 5 &&
                    Number.parseInt(post.title.rating) < 6,
                  [filmStyles.ratingWorst]:
                    Number.parseInt(post.title.rating) < 5
                })}
              >
                {post.title.rating}
              </p>
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
    </div>
  ) : (
    <Loader />
  );
};
/* eslint-enable @typescript-eslint/no-unsafe-assignment  --- ктущтиу */
/* eslint-enable @typescript-eslint/no-misused-promises  --- ктущтиу */
/* eslint-enable unicorn/prefer-query-selector  --- ктущтиу */
