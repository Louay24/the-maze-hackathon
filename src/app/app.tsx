import { BrowserRouter } from 'react-router-dom';

import { routes } from 'src/routes/routes';

import { setUpRoutes } from 'src/routes/routing';
import './App.scss';
import { ConfigProvider } from 'antd';
import { useThemeConfig } from 'src/constants/antdConfig';

export const App = () => {
  const themeConfig = useThemeConfig();
  return (
    <ConfigProvider csp={{ nonce: 'YourNonceCode' }} theme={themeConfig}>
      <div className="App light">
        <BrowserRouter> {setUpRoutes(routes)}</BrowserRouter>
      </div>
    </ConfigProvider>
  );
};
