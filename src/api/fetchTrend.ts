import { BASE_API_URL } from '~/api/constants';
import { type Article } from '~/entities/Article';
import { LocalStorageKey } from '~/pages/constants/constants';

export interface ArticleResponse {
  article: Article;
}
export async function fetchTrend(id: string): Promise<ArticleResponse> {
  const accessToken = localStorage.getItem(LocalStorageKey.accessToken);
  const headers = new Headers();
  accessToken && headers.append('Authorization', `Bearer ${accessToken}`);
  const response = await fetch(`${BASE_API_URL}/news/${id}`, { headers });

  if (response.status == 200) {
    const data = (await response.json()) as ArticleResponse;
    //console.log(data);
    return data;
  }

  throw new Error(
    `Request failed: ${response.status} (${response.statusText})`
  );
}
