import { Route } from './routing';
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
import { Number } from 'src/components/Number/Number';
import { Paths } from 'src/constants/paths';
export const routes: Route[] = [
  {
    guard: 'private',
    component: GetStartedLayout,
    routes: [
      {
        path: Paths.GetStarted,
        guard: 'private',
        component: GetStarted,
      },
      {
        path: Paths.StartNow,
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
        path: Paths.WorkspaceConfig,
        guard: 'private',
        component: Step1,
      },
      {
        path: Paths.WorkspaceConfig1,
        guard: 'private',
        component: Step2,
      },
      {
        path: Paths.WorkspaceConfig3,
        guard: 'private',
        component: Step3,
      },
      {
        path: Paths.WorkspaceConfig4,
        guard: 'private',
        component: Step4,
      },
      {
        path: Paths.WorkspaceConfig5,
        guard: 'private',
        component: Step5,
      },
      {
        guard: 'public',
        component: AuthLayout,
        routes: [
          {
            path: Paths.Login,
            guard: 'public',
            component: Login,
          },
          {
            path: Paths.Register,
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
        path: Paths.Dashboard,
        guard: 'private',
        showInMenu: true,
        label: 'dashboard',
        component: Dashboard,
        icon: <DashboardIcon />,
      },
      {
        path: Paths.Spaces,
        guard: 'private',
        showInMenu: true,
        label: 'spaces',
        component: Spaces,
        icon: <SpacesIcon />,
        routes: [
          {
            path: '/spaces/ss',
            guard: 'private',
            showInMenu: true,
            label: 'ss',
            component: Spaces,
            icon: <SpacesIcon />,
            routes: [
              {
                path: '/spaces/ss/rr',
                guard: 'private',
                showInMenu: true,
                label: 'rr',
                component: Spaces,
                icon: <SpacesIcon />,
              },
            ],
          },
        ],
      },
      {
        path: Paths.Chat,
        guard: 'private',
        showInMenu: true,
        label: 'chat',
        component: Chat,
        icon: <ChatIcon />,
        suffix: <Number color="blue" content="3" />,
      },
      {
        path: Paths.Brainstorming,
        guard: 'private',
        showInMenu: true,
        label: 'brainstorming',
        component: Brainstorming,
        icon: <BrainstormingIcon />,
      },
      {
        path: Paths.Calendar,
        guard: 'private',
        showInMenu: true,
        label: 'calendar',
        component: Calendar,
        icon: <CalendarIcon />,
      },
      {
        path: Paths.TimeTracking,
        guard: 'private',
        showInMenu: true,
        label: 'timeTracking',
        component: TimeTracking,
        icon: <TimeTrackingIcon />,
        suffix: <Number color="red" content="01:56" />,
      },
      {
        path: Paths.ReportGeneration,
        guard: 'private',
        showInMenu: true,
        label: 'reportGeneration',
        component: ReportGeneration,
        icon: <ReportGenerationIcon />,
      },
      {
        path: Paths.Settings,
        guard: 'private',
        showInMenu: true,
        label: 'settings',
        component: Settings,
        icon: <SettingsIcon />,
      },
    ],
  },
];
