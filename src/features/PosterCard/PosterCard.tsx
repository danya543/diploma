import { format } from 'date-fns';
import { Link } from 'react-router-dom';

import { type Poster } from '~/entities/Poster';
//import { Button } from '~/shared/ui/Button/Button';

import postStyles from './PostCard.module.scss';

export const PostCard = ({ post }: { post: Poster }) => {
  return (
    <div className={postStyles.container}>
      <img src={post.poster} />
      <div className={postStyles.date}>
        {format(new Date(post.year), 'yyyy')}
      </div>
      <h3>
        <Link to={`/titles/${post.id}`}>{post.name}</Link>
      </h3>
      <div className={postStyles.actions}></div>
    </div>
  );
};
