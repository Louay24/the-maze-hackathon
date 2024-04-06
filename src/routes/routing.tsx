import { Fragment, ReactNode } from 'react';
import { Route, Outlet, Routes } from 'react-router-dom';
import { AuthGuard } from 'src/guards/AuthGuard';
import { GuestGuard } from 'src/guards/GuestGuard';
import { motion } from 'framer-motion';
export interface Route {
  path?: string;
  key?: string;
  icon?: ReactNode;
  label?: string;
  component?: any;
  showInMenu?: boolean;
  guard: 'private' | 'public';
  routes?: Route[];
  index?: boolean;
  suffix?: ReactNode;
}
export const renderRoutes = (routes: Route[]) => {
  return routes?.map(({ path, component, guard, routes, index, ...props }) => {
    const Guard = guard === 'private' ? AuthGuard : GuestGuard;
    const Component = component ?? Fragment;

    return routes ? (
      <Route
        key={path}
        path={path}
        element={
          <Guard>
            <Component>
              <Outlet />
            </Component>
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
              className="routes-transition  "
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
  });
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
