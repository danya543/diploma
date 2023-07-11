import { BASE_API_URL, token } from '~/api/constants';
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

const postersPerPage = 12;

export async function fetchPosters({
  page
}: {
  page: number;
}): Promise<PosterResponse> {
  const headers = new Headers();
  headers.append('Authorization', `Bearer ${token}`);
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
