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
import { GetStartedLayout } from 'src/features/Registration/GetStartedLayout/GetStartedLayout';
import { StartNowPage } from 'src/pages/StartNowPage';
import { Layout, layoutKey } from 'src/layout/Layout';
import { DashboardIcon } from 'src/assets/icons/DashboardIcon/DashboardIcon';
import { SpacesIcon } from 'src/assets/icons/SpacesIcon/SpacesIcon';
import { UnderConstruction } from 'src/assets/icons/UnderConstruction';
import { Dashboard } from 'src/pages/Dashboard';
import { Spaces } from 'src/pages/Spaces';
import { Chat } from 'src/pages/Chat';
import { ChatIcon } from 'src/assets/icons/ChatIcon/ChatIcon';
import { BrainstormingIcon } from 'src/assets/icons/BrainstormingIcon/BrainstormingIcon';
import { Brainstorming } from 'src/pages/Brainstorming';
import { CalendarIcon } from 'src/assets/icons/CalendarIcon/CalendarIcon';
import { Calendar } from 'src/pages/Calendar';
import { TimeTracking } from 'src/pages/TimeTracking';
import { TimeTrackingIcon } from 'src/assets/icons/TimeTrackingIcon/TimeTrackingIcon';
import { ReportGeneration } from 'src/pages/ReportGeneration';
import { ReportGenerationIcon } from 'src/assets/icons/ReportGenerationIcon/ReportGeneration';
import { SettingsIcon } from 'src/assets/icons/SettingsIcon/SettingsIcon';
import { Settings } from 'src/pages/Settings';
export const routes: Route[] = [
  {
    guard: 'private',
    component: GetStartedLayout,
    routes: [
      {
        path: PATHS.GetStarted,
        guard: 'private',
        component: GetStarted,
      },
      {
        path: PATHS.StartNow,
        guard: 'private',
        component: StartNowPage,
      },
    ],
  },
  {
    guard: 'private',
    component: WorkSpaceConfig,
    routes: [
      {
        path: PATHS.WorkSpaceConfig1,
        guard: 'private',
        component: Step1,
      },
      {
        path: PATHS.WorkSpaceConfig2,
        guard: 'private',
        component: Step2,
      },
      {
        path: PATHS.WorkSpaceConfig3,
        guard: 'private',
        component: Step3,
      },
      {
        path: PATHS.WorkSpaceConfig4,
        guard: 'private',
        component: Step4,
      },
      {
        path: PATHS.WorkSpaceConfig5,
        guard: 'private',
        component: Step5,
      },
      {
        guard: 'public',
        component: AuthLayout,
        routes: [
          {
            path: PATHS.Login,
            guard: 'public',
            component: Login,
          },
          {
            path: PATHS.Register,
            guard: 'public',
            component: Register,
          },
        ],
      },
    ],
  },
  {
    guard: 'private',
    key: layoutKey,
    component: Layout,
    routes: [
      {
        path: PATHS.Dashboard,
        guard: 'private',
        showInMenu: true,
        label: 'Dashboard',
        component: Dashboard,
        icon: <DashboardIcon />,
      },
      {
        path: PATHS.Spaces,
        guard: 'private',
        showInMenu: true,
        label: 'Spaces',
        component: Spaces,
        icon: <SpacesIcon />,
      },
      {
        path: PATHS.Chat,
        guard: 'private',
        showInMenu: true,
        label: 'Chat',
        component: Chat,
        icon: <ChatIcon />,
      },
      {
        path: PATHS.Brainstorming,
        guard: 'private',
        showInMenu: true,
        label: 'Brainstorming',
        component: Brainstorming,
        icon: <BrainstormingIcon />,
      },
      {
        path: PATHS.Calendar,
        guard: 'private',
        showInMenu: true,
        label: 'Calendar',
        component: Calendar,
        icon: <CalendarIcon />,
      },
      {
        path: PATHS.TimeTracking,
        guard: 'private',
        showInMenu: true,
        label: 'Time Tracking',
        component: TimeTracking,
        icon: <TimeTrackingIcon />,
      },
      {
        path: PATHS.ReportGeneration,
        guard: 'private',
        showInMenu: true,
        label: 'Report Generation',
        component: ReportGeneration,
        icon: <ReportGenerationIcon />,
      },
      {
        path: PATHS.Settings,
        guard: 'private',
        showInMenu: true,
        label: 'Settings',
        component: Settings,
        icon: <SettingsIcon />,
      },
    ],
  },
];
