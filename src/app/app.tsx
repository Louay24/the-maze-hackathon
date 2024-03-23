import { BrowserRouter } from 'react-router-dom';
import { routes } from 'src/routes/routes';
import { setUpRoutes } from 'src/routes/routing';
import './App.scss';
export function App() {
  return (
    <div className="App light">
      <BrowserRouter>{setUpRoutes(routes)}</BrowserRouter>
    </div>
  );
}
