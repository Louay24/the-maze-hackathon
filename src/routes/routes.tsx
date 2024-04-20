import { Route } from './routing';

import { Layout, layoutKey, themes } from 'src/layout/Layout';
import { Dashboard } from 'src/pages/Dashboard';
import { ChatIcon } from 'src/assets/icons/ChatIcon/ChatIcon';

import { MdOutlineDashboardCustomize } from 'react-icons/md';

import { Number } from 'src/components/Number/Number';
import { Paths } from 'src/constants/paths';
import { Calculator } from 'src/pages/Calculator';
import { Chart } from 'src/pages/Chart';
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
        path: Paths.calculator,
        guard: 'public',
        showInMenu: true,
        theme: themes.industry,
        label: 'calculator',
        component: Calculator,
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
    ],
  },
];
