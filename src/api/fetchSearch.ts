import { type Poster } from '~/entities/Poster';

import { BASE_API_URL, postersPerPage } from './constants';

interface PosterResponse {
  status: string;
  results: {
    current_page: number;
    from: number;
    to: number;
    per_page: number;
    last_page: number;
    total: number;
    data: Poster[];
  };
}

export async function fetchSearch({
  query
}: {
  query: string;
}): Promise<PosterResponse> {
  const accessToken = localStorage.getItem('@pixema/access-token');
  const headers = new Headers();
  accessToken && headers.append('Authorization', `Bearer ${accessToken}`);
  const response = await fetch(
    `${BASE_API_URL}/search/${query}?limit=${postersPerPage}`,
    { headers }
  );

  if (response.status == 200) {
    const data = (await response.json()) as PosterResponse;

    return data;
  }

  throw new Error(
    `Request failed: ${response.status} (${response.statusText})`
  );
}
