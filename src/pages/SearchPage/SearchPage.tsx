import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { fetchSearch } from '~/api/fetchSearch';
import { type Poster } from '~/entities/Poster';
import { Loader } from '~/features/Loader/Loader';
import { PosterCard } from '~/features/PosterCard/PosterCard';

import searchStyle from './SearchPage.module.scss';

export const SearchPage = () => {
  const [posts, setPosts] = useState<Poster[]>([]);
  const [error, setError] = useState('');

  const { query } = useParams<'query'>();

  useEffect(() => {
    fetchSearch({ query: query || '' })
      .then((data) => {
        setPosts(data.results);
      })
      .catch((error: Error) => setError(error.message));
  }, [query]);

  return (
    <div className={searchStyle.container}>
      {error && <div>{error}</div>}
      <h1>Results of request: `{query}`</h1>
      {posts.length > 0 ? (
        <div className={searchStyle.content}>
          {posts.map((post) => (
            <PosterCard
              key={post.id}
              post={post}
              chapter="titles"
            />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};
