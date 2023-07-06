import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { MainLayout } from '~/layouts/MainLayout/MainLayout';
import { SignLayout } from '~/layouts/SignLayout/SignLayout';
import { FilmPage } from '~/pages/FilmPage/FilmPage';
import { MainPage } from '~/pages/Main/MainPage';
import { SignInPage } from '~/pages/SignIn/SignIn';

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
        element: <div>Sign up</div> //<SignUpPage />
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
        element: <div>Trends</div>
      },
      {
        path: 'favorites',
        element: <div>Favorites</div>
      },
      {
        path: 'settings',
        element: <div>Settings</div>
      },
      {
        path: 'titles/:id',
        element: <FilmPage />
      }
    ]
  },
  {
    path: '*',
    element: <div>Not found</div>
  }
]);

export const AppRouter = () => <RouterProvider router={routerSchema} />;
