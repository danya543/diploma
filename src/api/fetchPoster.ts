import { BASE_API_URL } from '~/api/constants';
import { type Poster } from '~/entities/Poster';

export interface PosterResponse {
  title: Poster;
}
export async function fetchPoster(id: string): Promise<PosterResponse> {
  const accessToken = localStorage.getItem('@pixema/access-token');
  const headers = new Headers();
  accessToken && headers.append('Authorization', `Bearer ${accessToken}`);
  const response = await fetch(`${BASE_API_URL}/titles/${id}`, { headers });

  if (response.status == 200) {
    const data = (await response.json()) as PosterResponse;

    return data;
  }

  throw new Error(
    `Request failed: ${response.status} (${response.statusText})`
  );
}
