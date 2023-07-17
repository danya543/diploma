import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosHeaders, type AxiosResponse } from 'axios';

import { BASE_API_URL } from '~/api/constants';
import { type JWTToken, type User } from '~/entities/user';
import { type CreateTokenPayload } from '~/features/states/userSlice/user.types';

export const fetchUser = createAsyncThunk(
  'user/fetch',
  async function (_, thunkAPI) {
    const accessToken = localStorage.getItem('@pixema/access-token');

    if (!accessToken) {
      throw new Error('Unauthorized');
    }

    const headers = new AxiosHeaders();

    headers.set('Authorization', `Bearer ${accessToken}`);
    const { data } = await axios.get<User>(`${BASE_API_URL}/user-profile/me`, {
      headers,
      signal: thunkAPI.signal
    });
    return data;
  }
);

export const createTokens = createAsyncThunk(
  'user/createTokens',
  async function (payload: CreateTokenPayload, thunkAPI) {
    const { data } = await axios.post<
      JWTToken,
      AxiosResponse<JWTToken>,
      CreateTokenPayload
    >(`https://unelmamovie.com/api/v1/auth/login`, payload, {
      signal: thunkAPI.signal
    });

    return data;
  }
);
