import axios, { type AxiosResponse } from 'axios';

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
  >(`https://unelmamovie.com/api/v1/auth/register`, user, {
    headers: { accept: 'application/json', 'Content-Type': 'application/json' }
  });

  return data;
}
