import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { type AxiosResponse } from 'axios';

import { BASE_API_URL } from '~/api/constants';
import { type JWTToken } from '~/entities/user';
import { type CreateTokenPayload } from '~/features/states/userSlice/user.types';

export const createTokens = createAsyncThunk(
  'user/createTokens',
  async function (payload: CreateTokenPayload, thunkAPI) {
    const { data } = await axios.post<
      JWTToken,
      AxiosResponse<JWTToken>,
      CreateTokenPayload
    >(`${BASE_API_URL}/auth/login`, payload, {
      signal: thunkAPI.signal
    });

    return data;
  }
);
