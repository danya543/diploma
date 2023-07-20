import { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { fetchTrend } from '~/api/fetchTrend';
import { type ArticleResponse } from '~/api/fetchTrend';
import { ReactComponent as LeftArrow } from '~/assets/icons/IconChevronLeftPag.svg';
import { Loader } from '~/features/Loader/Loader';
import { Button } from '~/shared/ui/Button/Button';

import newsStyles from './NewsPage.module.scss';

export const NewsPage = () => {
  const [news, setNews] = useState<ArticleResponse | null>(null);
  const { id } = useParams<'id'>();
  const navigate = useNavigate();

  useEffect(() => {
    if (id && !Number.isNaN(+id)) {
      fetchTrend(id)
        .then((data) => setNews(data))
        .catch((error) => console.error(error));
    }
  }, []);

  return news ? (
    <div className={newsStyles.container}>
      <Button
        text={'Back'}
        iconLeft={<LeftArrow />}
        onClick={() => {
          navigate(-1);
        }}
      />
      <div className={newsStyles.info}>
        <img src={news.article.meta.image} />
        <div className={newsStyles.main}>
          <h1>{news.article.title}</h1>
          <p>{news.article.body}</p>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};
