import axios, { type AxiosResponse } from 'axios';

import { BASE_API_URL } from './constants';

export interface CreateUserResponse {
  username: string;
  email: string;
  id: number;
}

interface CreateUserPayload {
  username: string;
  password: string;
  email: string;
  password_confirmation: string;
}

export async function createUser(user: CreateUserPayload) {
  const { data } = await axios.post<
    CreateUserResponse,
    AxiosResponse<CreateUserResponse>,
    CreateUserPayload
  >(`${BASE_API_URL}/auth/register`, user, {
    headers: { accept: 'application/json', 'Content-Type': 'application/json' }
  });

  return data;
}
