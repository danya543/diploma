import axios, { type AxiosResponse } from 'axios';

import { LocalStorageKey } from '~/pages/constants/constants';

import { BASE_API_URL } from '../constants';

export interface ListRemoveResponse {
  status: string;
}

export interface ListRemovePayload {
  itemId: number;
  itemType: string;
}

export async function deleteFromList(
  id: ListRemovePayload,
  listId: string | undefined
) {
  const accessToken = localStorage.getItem(LocalStorageKey.accessToken);
  if (accessToken && listId) {
    const { data } = await axios.post<
      ListRemoveResponse,
      AxiosResponse<ListRemoveResponse>,
      ListRemovePayload
    >(`${BASE_API_URL}/lists/${listId}/remove`, id, {
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      }
    });

    return data;
  }
}
