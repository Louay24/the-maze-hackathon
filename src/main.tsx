import * as ReactDOM from 'react-dom/client';
import { App } from 'src/app/App';
import { LanguageProvider } from './providers/translation/LanguageContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);
