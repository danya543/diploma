import { type Poster } from '~/entities/Poster';

import { BASE_API_URL, postersPerPage } from './constants';

interface SearchResults {
  results: Poster[];
  query: string;
}

export async function fetchSearch({
  query
}: {
  query: string;
}): Promise<SearchResults> {
  const accessToken = localStorage.getItem('@pixema/access-token');
  const headers = new Headers();
  accessToken && headers.append('Authorization', `Bearer ${accessToken}`);
  const response = await fetch(
    `${BASE_API_URL}/search/${query}?limit=${postersPerPage}`,
    { headers }
  );

  if (response.status == 200) {
    const data = (await response.json()) as SearchResults;

    return data;
  }

  throw new Error(
    `Request failed: ${response.status} (${response.statusText})`
  );
}
