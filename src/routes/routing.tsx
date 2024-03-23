import {
  ComponentType,
  Fragment,
  JSXElementConstructor,
  LazyExoticComponent,
} from 'react';
import { Route, Outlet, Routes } from 'react-router-dom';
import { AuthGuard } from 'src/guards/AuthGuard';
import { GuestGuard } from 'src/guards/GuestGuard';
import { Layout as MainLayout } from 'src/layout/Layout';
export interface Route {
  path: string;
  component?: any;
  layout: boolean;
  guard: 'private' | 'public';
  routes?: Route[];
  index?: boolean;
}
export const renderRoutes = (routes: Route[]) => {
  return routes?.map(
    ({ path, component, layout, guard, routes, index, ...props }) => {
      const Guard = guard === 'private' ? AuthGuard : GuestGuard;
      const Layout = layout ? MainLayout : Fragment;
      const Component = component ?? Fragment;

      return routes ? (
        <Route
          key={path}
          path={path}
          element={
            <Guard>
              <Layout>
                <Component>
                  <Outlet />
                </Component>
              </Layout>
            </Guard>
          }
        >
          {routes && renderRoutes(routes)}
        </Route>
      ) : (
        <Route
          key={path}
          index={index}
          path={path}
          element={
            <Guard>
              <Component />
            </Guard>
          }
        />
      );
    }
  );
};
export const setUpRoutes = (routes: Route[]) => {
  return <Routes>{renderRoutes(routes)}</Routes>;
};
