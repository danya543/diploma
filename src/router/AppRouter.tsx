import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { MainLayout } from '~/layouts/MainLayout/MainLayout';
import { SignLayout } from '~/layouts/SignLayout/SignLayout';
import { FavoritiesPage } from '~/pages/FavoritPage/FavoritPage';
import { FilmPage } from '~/pages/FilmPage/FilmPage';
import { MainPage } from '~/pages/Main/MainPage';
import { NewsPage } from '~/pages/NewsPage/NewsPage';
import { SettingsPage } from '~/pages/SettingsPage/SettingsPage';
import { SignInPage } from '~/pages/SignIn/SignIn';
import { SignUpPage } from '~/pages/SignUp/SignUp';
import { TrendsPage } from '~/pages/TrendsPage/TrendsPage';

const routerSchema = createBrowserRouter([
  {
    Component: SignLayout,
    path: 'sign',
    children: [
      {
        path: 'in',
        element: <SignInPage />
      },
      {
        path: 'up',
        element: <SignUpPage />
      }
    ]
  },
  {
    Component: MainLayout,
    path: '/',
    children: [
      {
        index: true,
        element: <MainPage />
      },
      {
        path: 'trends',
        element: <TrendsPage />
      },
      {
        path: 'favorities',
        element: <FavoritiesPage />
      },
      {
        path: 'settings',
        element: <SettingsPage />
      },
      {
        path: 'titles/:id',
        element: <FilmPage />
      },
      {
        path: 'news/:id',
        element: <NewsPage />
      }
    ]
  },
  {
    path: '*',
    element: <div>Not found</div>
  }
]);

export const AppRouter = () => <RouterProvider router={routerSchema} />;
