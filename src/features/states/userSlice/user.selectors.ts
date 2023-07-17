import { type RootState } from '~/store/store.types';

export const selectUser = (state: RootState) => {
  state.user.tokens.status === 'success' ? state.user.tokens.data.user : null;
};
export const selectTokens = (state: RootState) =>
  state.user.tokens.status === 'success'
    ? state.user.tokens.data.user.access_token
    : null;
