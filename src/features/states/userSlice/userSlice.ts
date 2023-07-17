import { createSlice } from '@reduxjs/toolkit';

import { createTokens } from '~/features/states/userSlice/user.api';
import { type UserSlice } from '~/features/states/userSlice/user.types';

const getInitialState = (): UserSlice => {
  const accessToken = localStorage.getItem('@pixema/access-token');

  return {
    currentUser: { status: 'idle' },
    tokens: accessToken
      ? { status: 'success', data: { user: { access_token: accessToken } } }
      : { status: 'idle' }
  };
};

export const userSlice = createSlice({
  name: 'user',
  initialState: getInitialState,
  reducers: {
    logout: (state) => {
      state.currentUser = { status: 'idle' };
    }
  },
  extraReducers: (builder) => {
    /* builder.addCase(fetchUser.pending, (state) => {
      state.currentUser = { status: 'idle' };
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.currentUser = { status: 'success', data: action.payload };
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      console.log(action)
      if (action.error.name === 'AbortError') {
        return;
      }

      state.currentUser = {
        status: 'error',
        error: action.error.message || 'Something went wrong'
      };
    });*/

    builder.addCase(createTokens.pending, (state) => {
      state.tokens = { status: 'idle' };
    });
    builder.addCase(createTokens.fulfilled, (state, action) => {
      state.tokens = { status: 'success', data: action.payload };
    });
    builder.addCase(createTokens.rejected, (state, action) => {
      if (action.error.name === 'AbortError') {
        return;
      }

      state.tokens = {
        status: 'error',
        error: action.error.message || 'Something went wrong'
      };
    });
  }
});

export const userReducer = userSlice.reducer;

export const { actions } = userSlice;
