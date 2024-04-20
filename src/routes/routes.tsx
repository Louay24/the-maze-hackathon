import { Route } from './routing';

import { Layout, layoutKey, themes } from 'src/layout/Layout';
import { Dashboard } from 'src/pages/Dashboard';
import { Chat } from 'src/pages/Chat';
import { ChatIcon } from 'src/assets/icons/ChatIcon/ChatIcon';

import { MdOutlineDashboardCustomize } from 'react-icons/md';

import { Number } from 'src/components/Number/Number';
import { Paths } from 'src/constants/paths';
import { Calculator } from 'src/pages/Calculator';
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
        label: 'dashboard',
        component: Dashboard,
        icon: <MdOutlineDashboardCustomize />,
      },

      {
        path: Paths.Project3,
        theme: themes.healthCare,
        guard: 'private',
        showInMenu: true,
        label: 'chat',
        component: Chat,
        icon: <ChatIcon />,
        suffix: <Number color="blue" content="3" />,
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
