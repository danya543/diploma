import { useEffect, useState } from 'react';

import { fetchPosters } from '~/api/fetchPosters';
import { type Poster } from '~/entities/Poster';
import { PostCard } from '~/features/PosterCard/PosterCard';

import pageStyles from './MainPage.module.scss';

export const MainPage = () => {
  const [posts, setPosts] = useState<Poster[]>([]);

  useEffect(() => {
    fetchPosters()
      .then((data) => setPosts(data.pagination.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className={pageStyles.container}>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
};
