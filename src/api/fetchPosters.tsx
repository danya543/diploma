import { BASE_API_URL, postersPerPage } from '~/api/constants';
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

export async function fetchPosters({
  page,
  accessToken
}: {
  page: number;
  accessToken: string;
}): Promise<PosterResponse> {
  const headers = new Headers();
  headers.append('Authorization', `Bearer ${accessToken}`);

  const response = await fetch(
    `${BASE_API_URL}/titles?perPage=${postersPerPage}&page=${page}`,
    {
      headers
    }
  );

  if (response.status == 200) {
    const data = (await response.json()) as PosterResponse;

    return data;
  }

  throw new Error(
    `Request failed: ${response.status} (${response.statusText})`
  );
}
