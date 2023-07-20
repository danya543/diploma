import { BASE_API_URL } from '~/api/constants';
import { type User } from '~/entities/user';
import { LocalStorageKey } from '~/pages/constants/constants';

export async function fetchUser(): Promise<User> {
  const accessToken = localStorage.getItem(LocalStorageKey.accessToken);
  const headers = new Headers();
  accessToken && headers.append('Authorization', `Bearer ${accessToken}`);
  const response = await fetch(`${BASE_API_URL}/user-profile/me`, { headers });

  if (response.status == 200) {
    const data = (await response.json()) as User;

    return data;
  }

  throw new Error(
    `Request failed: ${response.status} (${response.statusText})`
  );
}
