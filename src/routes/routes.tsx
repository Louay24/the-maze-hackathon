import { Route } from './routing';
import { PATHS } from 'src/constants/paths';
import { AuthLayout } from 'src/pages/AuthLayout';
import { Login } from 'src/features/Auth/Login/Login';
import { Register } from 'src/features/Auth/Register/Register';
import { GetStarted } from 'src/pages/GetStarted';
import { WorkSpaceConfig } from 'src/features/Registration/WorkSpaceConfig/WorkSpaceConfig';
import { Step1 } from 'src/features/Registration/Steps/Step1/Step1';
import { Step2 } from 'src/features/Registration/Steps/Step2/Step2';
import { Step3 } from 'src/features/Registration/Steps/Step3/Step3';
import { Step4 } from 'src/features/Registration/Steps/Step4/Step4';
import { Step5 } from 'src/features/Registration/Steps/Step5/Step5';
export const routes: Route[] = [
  {
    layout: false,
    // path: PATHS.root,
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
  {
    layout: false,
    // path: PATHS.WorkSpaceConfig,
    guard: 'private',
    component: WorkSpaceConfig,
    routes: [
      {
        layout: false,
        path: PATHS.WorkSpaceConfig1,
        guard: 'private',
        component: Step1,
      },
      {
        layout: false,
        path: PATHS.WorkSpaceConfig2,
        guard: 'private',
        component: Step2,
      },
      {
        layout: false,
        path: PATHS.WorkSpaceConfig3,
        guard: 'private',
        component: Step3,
      },
      {
        layout: false,
        path: PATHS.WorkSpaceConfig4,
        guard: 'private',
        component: Step4,
      },
      {
        layout: false,
        path: PATHS.WorkSpaceConfig5,
        guard: 'private',
        component: Step5,
      },
    ],
  },
];
