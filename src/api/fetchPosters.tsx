import { BASE_API_URL } from '~/api/constants';
import { type Poster } from '~/entities/Poster';

interface PosterResponse {
  status: string;
  pagination: {
    current_page: number;
    from: number;
    to: number;
    per_page: number;
    last_page: number;
    total: number;
    data: Poster[];
  };
}

export async function fetchPosters(): Promise<PosterResponse> {
  const headers = new Headers();
  const token = '907|EwQ6kSNifSDPKFLKXYA9jWGUBwf6UOaY8WfcDkJi';
  headers.append('Authorization', `Bearer ${token}`);
  const response = await fetch(`${BASE_API_URL}/titles`, {
    headers
  });

  if (response.status == 200) {
    const data = (await response.json()) as PosterResponse;

    return data;
  }

  throw new Error(
    `Request failed: ${response.status} (${response.statusText})`
  );
}
