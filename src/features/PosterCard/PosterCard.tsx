import { Link } from 'react-router-dom';

import { type Poster } from '~/entities/Poster';

import postStyles from './PostCard.module.scss';

export const PosterCard = ({ post }: { post: Poster }) => {
  return (
    <div className={postStyles.container}>
      <img src={post.poster} />
      <h3>
        <Link to={`/titles/${post.id}`}>{post.name}</Link>
      </h3>
    </div>
  );
};
