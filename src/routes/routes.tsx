import { Route } from './routing';
import { PATHS } from 'src/constants/paths';
import { AuthLayout } from 'src/pages/AuthLayout';
import { Login } from 'src/features/Auth/Login/Login';
import { Register } from 'src/features/Auth/Register/Register';
import { GetStarted } from 'src/pages/GetStarted';
export const routes: Route[] = [
  {
    layout: false,
    path: PATHS.root,
    guard: 'public',
    component: AuthLayout,
    routes: [
      {
        layout: false,
        path: PATHS.login,
        guard: 'public',
        component: Login,
      },
      {
        layout: false,
        path: PATHS.register,
        guard: 'public',
        component: Register,
      },
    ],
  },
  {
    layout: false,
    path: PATHS.getStarted,
    guard: 'private',
    component: GetStarted,
  },
];
