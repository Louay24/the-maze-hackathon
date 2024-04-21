import { Route } from './routing';

import { Layout, layoutKey, themes } from 'src/layout/Layout';
import { Dashboard } from 'src/pages/Dashboard';

import { MdOutlineDashboardCustomize } from 'react-icons/md';

import { Paths } from 'src/constants/paths';
import MedicationReminderUI from 'src/pages/MedicationReminderUI';
import C18 from 'src/features/Challange_1';
import { Chart } from 'src/pages/Chart';
import { Calculator } from 'src/pages/Calculator';
import C82 from 'src/features/Challange_82';
import { MemesPage } from 'src/pages/MemesPage';
import { Figma } from 'src/pages/Figma';
import C114 from 'src/features/Challange_114';
import { WorldClock } from 'src/pages/WorldClock';
import { CalendarIcon } from 'src/assets/icons/CalendarIcon/CalendarIcon';
import { Quiz } from 'src/pages/Quiz';
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
        path: Paths.Project114,
        guard: 'public',
        showInMenu: true,
        theme: themes.bi,
        label: '#114',
        component: C114,
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
        path: Paths.Project5,
        guard: 'public',
        showInMenu: true,
        theme: themes.healthCare,
        label: 'MedicationReminderUI',
        component: MedicationReminderUI,
        icon: <CalendarIcon />,
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
      {
        path: Paths.memes,
        guard: 'public',
        showInMenu: true,
        theme: themes.bi,
        label: 'memes',
        component: MemesPage,
        icon: <MdOutlineDashboardCustomize />,
      },
      {
        path: Paths.figma,
        guard: 'public',
        showInMenu: true,
        theme: themes.bi,
        label: 'UI/UX challenges',
        component: Figma,
        icon: <MdOutlineDashboardCustomize />,
      },
      {
        path: Paths.worldClock,
        guard: 'public',
        showInMenu: true,
        theme: themes.industry,
        label: 'World Clock',
        component: WorldClock,
        icon: <MdOutlineDashboardCustomize />,
      },
      {
        path: Paths.quiz,
        guard: 'public',
        showInMenu: true,
        theme: themes.industry,
        label: 'Quiz',
        component: Quiz,
        icon: <MdOutlineDashboardCustomize />,
      },
    ],
  },
];
