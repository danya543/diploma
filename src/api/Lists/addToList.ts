import axios, { type AxiosResponse } from 'axios';

import { LocalStorageKey } from '~/pages/constants/constants';

import { BASE_API_URL } from '../constants';

export interface ListAddResponse {
  status: string;
}

export interface ListAddPayload {
  itemId: number;
  itemType: string;
}

export async function addToList(
  item: ListAddPayload,
  listId: string | undefined
) {
  const accessToken = localStorage.getItem(LocalStorageKey.accessToken);
  if (accessToken && listId) {
    const { data } = await axios.post<
      ListAddResponse,
      AxiosResponse<ListAddResponse>,
      ListAddPayload
    >(`${BASE_API_URL}/lists/${listId}/add`, item, {
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      }
    });

    return data;
  }
}
