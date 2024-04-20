import { Route } from './routing';

import { Layout, layoutKey, themes } from 'src/layout/Layout';
import { DashboardIcon } from 'src/assets/icons/DashboardIcon/DashboardIcon';
import { Dashboard } from 'src/pages/Dashboard';
import { Chat } from 'src/pages/Chat';
import { ChatIcon } from 'src/assets/icons/ChatIcon/ChatIcon';
import { BrainstormingIcon } from 'src/assets/icons/BrainstormingIcon/BrainstormingIcon';
import { Brainstorming } from 'src/pages/Brainstorming';
import { CalendarIcon } from 'src/assets/icons/CalendarIcon/CalendarIcon';
import { Calendar } from 'src/pages/Calendar';
import { MdOutlineDashboardCustomize } from 'react-icons/md';

import { Number } from 'src/components/Number/Number';
import { Paths } from 'src/constants/paths';
export const routes: Route[] = [
  {
    guard: 'public',
    key: layoutKey,
    component: Layout,
    routes: [
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
        path: Paths.Project4,
        guard: 'private',
        theme: themes.leaks,
        showInMenu: true,
        label: 'brainstorming',
        component: Brainstorming,
        icon: <BrainstormingIcon />,
      },
      {
        path: Paths.Project5,
        guard: 'private',
        showInMenu: true,
        theme: themes.leaks,
        label: 'calendar',
        component: Calendar,
        icon: <CalendarIcon />,
      },
    ],
  },
];
