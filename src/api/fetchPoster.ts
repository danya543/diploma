import { BASE_API_URL, token } from '~/api/constants';
import { type Poster } from '~/entities/Poster';

export interface PosterResponse {
  title: Poster;
}
export async function fetchPoster(id: string): Promise<PosterResponse> {
  const headers = new Headers();
  headers.append('Authorization', `Bearer ${token}`);
  const response = await fetch(`${BASE_API_URL}/titles/${id}`, { headers });

  if (response.status == 200) {
    const data = (await response.json()) as PosterResponse;

    return data;
  }

  throw new Error(
    `Request failed: ${response.status} (${response.statusText})`
  );
}
