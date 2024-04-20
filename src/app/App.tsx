import { BrowserRouter } from 'react-router-dom';

import { routes } from 'src/routes/routes';

import { setUpRoutes } from 'src/routes/routing';
import './App.scss';
import { ConfigProvider } from 'antd';
import { useThemeConfig } from 'src/constants/antdConfig';
import {
  Languages,
  useLanguage,
} from 'src/providers/translation/LanguageContext';


export const App = () => {
  const themeConfig = useThemeConfig();
  const { selectedLanguage } = useLanguage();
  const direction = selectedLanguage === Languages.AR ? 'rtl' : 'ltr';
  return (
    <ConfigProvider
      direction={direction}
      getPopupContainer={() => document.querySelector('.App') as HTMLElement}
      getTargetContainer={() => document.querySelector('.App') as HTMLElement}
      theme={themeConfig}
    >
      <div className={`App light ${direction}`}>
        <BrowserRouter> {setUpRoutes(routes)}</BrowserRouter>
      </div>
    </ConfigProvider>
  );
};
