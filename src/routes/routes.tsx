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
import { Layout, layoutKey, themes } from 'src/layout/Layout';
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
        icon: <DashboardIcon />,
      },
      {
        path: Paths.Project2,
        guard: 'private',
        showInMenu: true,
        label: 'spaces',
        theme: themes.healthCare,
        component: Spaces,
        icon: <SpacesIcon />,
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
