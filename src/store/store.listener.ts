import { createListenerMiddleware } from '@reduxjs/toolkit';

import { switchTheme } from '~/features/states/themeSlice/themeSlice';
import { createTokens } from '~/features/states/userSlice/user.api';
import { userSlice } from '~/features/states/userSlice/userSlice';
import { LocalStorageKey } from '~/pages/constants/constants';

export const ListenerMiddleWare = createListenerMiddleware();

ListenerMiddleWare.startListening({
  matcher: switchTheme.match,
  effect: ({ payload }) => {
    document
      .querySelector(':root')!
      .classList[payload === 'light' ? 'remove' : 'add']('light');
  }
});

ListenerMiddleWare.startListening({
  matcher: createTokens.fulfilled.match,
  effect: ({ payload }) => {
    localStorage.setItem(
      LocalStorageKey.accessToken,
      payload.user.access_token
    );
  }
});

ListenerMiddleWare.startListening({
  matcher: userSlice.actions.logout.match,
  effect: () => {
    localStorage.removeItem(LocalStorageKey.accessToken);
    localStorage.removeItem(LocalStorageKey.listId);
    localStorage.removeItem(LocalStorageKey.book);
  }
});
