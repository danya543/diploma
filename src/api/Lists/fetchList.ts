import { BASE_API_URL } from '~/api/constants';
import { type Poster } from '~/entities/Poster';
import { type User } from '~/entities/user';
import { LocalStorageKey } from '~/pages/constants/constants';

export interface ListResponse {
  list: {
    id: number;
    name: string;
    user: User;
  };
  items: {
    data: Poster[];
  };
}
export async function fetchList(listId: string): Promise<ListResponse> {
  const accessToken = localStorage.getItem(LocalStorageKey.accessToken);
  const headers = new Headers();
  accessToken && headers.append('Authorization', `Bearer ${accessToken}`);
  const response = await fetch(`${BASE_API_URL}/lists/${listId}`, { headers });

  if (response.status == 200) {
    const data = (await response.json()) as ListResponse;

    return data;
  }

  throw new Error(
    `Request failed: ${response.status} (${response.statusText})`
  );
}
