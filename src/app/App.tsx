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
import { useEffect } from 'react';
import socketManager from 'src/socket/socketManager';

export const App = () => {
  const themeConfig = useThemeConfig();
  const { selectedLanguage } = useLanguage();
  const direction = selectedLanguage === Languages.AR ? 'rtl' : 'ltr';
  useEffect(()=>{
    const token = localStorage.setItem('access_token','random_one')
    socketManager._connectSocket()
    socketManager._joinRoom('for_everyone')
  },[])
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
