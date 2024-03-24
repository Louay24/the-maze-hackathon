import { Fragment } from 'react';
import { Route, Outlet, Routes } from 'react-router-dom';
import { AuthGuard } from 'src/guards/AuthGuard';
import { GuestGuard } from 'src/guards/GuestGuard';
import { Layout as MainLayout } from 'src/layout/Layout';
import { motion } from 'framer-motion';
export interface Route {
  path?: string;
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
              <motion.div
                className="routes-transition "
                key={path}
                initial="initial"
                animate="in"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Component />
              </motion.div>
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
const pageVariants = {
  initial: {
    opacity: 0.25,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0.25,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'linear',
  duration: 0.5,
};
