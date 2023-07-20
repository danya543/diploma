import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { type Poster } from '~/entities/Poster';

import postStyles from './PosterCard.module.scss';

export const PosterCard = ({
  post,
  chapter
}: {
  post: Poster;
  chapter: string;
}) => {
  const rating = Number.parseInt(post.rating);

  return (
    <div className={postStyles.container}>
      <img src={(post.poster && post.poster) || post.meta.image} />
      <span
        className={classNames({
          [postStyles.rating]: true,
          [postStyles.ratingBest]: rating >= 6,
          [postStyles.ratingGood]: rating >= 5 && rating < 6,
          [postStyles.ratingWorst]: rating < 5
        })}
      >
        {post.rating}
      </span>
      <h3>
        <Link to={`/${chapter}/${post.id}`}>
          {(post.name && post.name) || post.title}
        </Link>
      </h3>
    </div>
  );
};
