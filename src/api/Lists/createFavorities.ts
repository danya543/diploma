/* eslint-disable @typescript-eslint/naming-convention   -- svme  */
import axios, { type AxiosResponse } from 'axios';

import { LocalStorageKey } from '~/pages/constants/constants';

import { BASE_API_URL } from '../constants';

export interface ListAddResponse {
  list: { id: number };
}

export interface ListAddPayload {
  details: {
    name: string;
    description: string;
    public?: boolean;
  };
  items: [
    {
      id: number;
      type: string;
    }
  ];
}

export async function createList(list: ListAddPayload) {
  const accessToken = localStorage.getItem(LocalStorageKey.accessToken);
  if (accessToken) {
    const { data } = await axios.post<
      ListAddResponse,
      AxiosResponse<ListAddResponse>,
      ListAddPayload
    >(`${BASE_API_URL}/lists`, list, {
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      }
    });

    return data;
  }
}
/* eslint-enable @typescript-eslint/naming-convention   -- svme  */
