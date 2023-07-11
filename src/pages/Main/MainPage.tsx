import { useEffect, useState } from 'react';

import { fetchPosters } from '~/api/fetchPosters';
import { type Poster } from '~/entities/Poster';
import { PosterCard } from '~/features/PosterCard/PosterCard';
import { Pagination } from '~/shared/ui/Pagintion/Pagination';

import pageStyles from './MainPage.module.scss';

export const MainPage = () => {
  const [posts, setPosts] = useState<Poster[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetchPosters({ page: page })
      .then((data) => {
        setPosts(data.pagination.data);
        setPageNumber(data.pagination.last_page);
      })
      .catch((error) => console.error(error));
  }, [page]);

  return (
    <>
      <div className={pageStyles.container}>
        {posts.map((post) => (
          <PosterCard
            key={post.id}
            post={post}
          />
        ))}
      </div>
      <div className={pageStyles.pagination}>
        <Pagination
          page={page}
          setPage={setPage}
          numberPage={pageNumber}
        />
      </div>
    </>
  );
};
