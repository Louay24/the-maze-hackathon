import { Route } from './routing';

import { Layout, layoutKey, themes } from 'src/layout/Layout';
import { Dashboard } from 'src/pages/Dashboard';
import { ChatIcon } from 'src/assets/icons/ChatIcon/ChatIcon';

import { MdOutlineDashboardCustomize } from 'react-icons/md';

import { Paths } from 'src/constants/paths';
import C18 from 'src/features/Challange_1';
import { Chart } from 'src/pages/Chart';
import { Calculator } from 'src/pages/Calculator';
import C82 from 'src/features/Challange_82';
import C72 from 'src/features/Challange_72';
import C150 from 'src/features/Challange_150';
export const routes: Route[] = [
  {
    guard: 'public',
    key: layoutKey,
    component: Layout,
    routes: [
      {
        path: Paths.Root,
        guard: 'public',
        showInMenu: true,
        theme: themes.healthCare,
        label: 'dashboard',
        component: Dashboard,
        icon: <MdOutlineDashboardCustomize />,
      },
      {
        path: Paths.Project1,
        guard: 'public',
        showInMenu: true,
        theme: themes.healthCare,
        label: '#18',
        component: C18,
        icon: <MdOutlineDashboardCustomize />,
      },
      {
        path: Paths.Project82,
        guard: 'public',
        showInMenu: true,
        theme: themes.healthCare,
        label: '#82',
        component: C82,
        icon: <MdOutlineDashboardCustomize />,
      },
      {
        path: Paths.Project72,
        guard: 'public',
        showInMenu: true,
        theme: themes.healthCare,
        label: '#72',
        component: C72,
        icon: <MdOutlineDashboardCustomize />,
      },
      {
        path: Paths.Project150,
        guard: 'public',
        showInMenu: true,
        theme: themes.industry,
        label: '#150',
        component: C150,
        icon: <MdOutlineDashboardCustomize />,
      },
      {
        path: Paths.chart,
        guard: 'public',
        showInMenu: true,
        theme: themes.industry,
        label: 'chart',
        component: Chart,
        icon: <MdOutlineDashboardCustomize />,
      },
      {
        path: Paths.calculator,
        guard: 'public',
        showInMenu: true,
        theme: themes.industry,
        label: 'calculator',
        component: Calculator,
        icon: <MdOutlineDashboardCustomize />,
      },
    ],
  },
];
