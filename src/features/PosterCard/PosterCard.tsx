import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { type Poster } from '~/entities/Poster';

import postStyles from './PosterCard.module.scss';

export const PosterCard = ({ post }: { post: Poster }) => {
  const rating = Number.parseInt(post.rating);
  return (
    <div className={postStyles.container}>
      <img src={post.poster} />
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
        <Link to={`/titles/${post.id}`}>{post.name}</Link>
      </h3>
    </div>
  );
};
