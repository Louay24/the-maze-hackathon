import { ReactNode, useReducer } from 'react';
import { Layout as AntdLayout, Breadcrumb, Menu, Select, Tooltip } from 'antd';
import { routes } from 'src/routes/routes';
import { useLocation, useNavigate } from 'react-router-dom';
import { Logo } from 'src/assets/icons/Logo/logo';
import { Navbar } from './Nav/Navbar';
import { useLanguage } from 'src/providers/translation/LanguageContext';
import { Workspace } from 'src/components/Worspace/Workspace';
import { BottomArrow } from 'src/assets/icons/BottomArrow/BottomArrow';

const { Sider } = AntdLayout;
export const layoutKey = 'main_layout';

export const Layout = ({ children }: { children: ReactNode }) => {
  const { t } = useLanguage();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [collapsed, toggleCollapsed] = useReducer(
    (collapsed) => !collapsed,
    false
  );
  const mainLayoutRoutes = routes?.find(
    (route) => route.key === layoutKey
  )?.routes;
  let crumbRoutes = mainLayoutRoutes;
  let path = '';
  const labels: { title: ReactNode }[] = [];

  pathname
    .split('/')
    .filter((el) => el !== '')
    .forEach((pathnamePart) => {
      path += `/${pathnamePart}`;
      const currentRoute = crumbRoutes?.find((route) => route.path === path);
      crumbRoutes = currentRoute?.routes;
      if (currentRoute) {
        labels.push({
          title: <a href={path}>{t(currentRoute.label)}</a>,
        });
      }
    });
  const items =
    mainLayoutRoutes
      ?.filter((el) => el.showInMenu)
      .map(({ icon, path, label, suffix }) => {
        const labelItem = (
          <div className="main_layout-sider-label">
            {t(label)}
            {suffix && suffix}
          </div>
        );
        return {
          key: path,
          icon: collapsed ? (
            <Tooltip placement="right" title={labelItem}>
              <>{icon}</>
            </Tooltip>
          ) : (
            icon
          ),
          ...(!collapsed
            ? {
                label: labelItem,
              }
            : {}),
        };
      }) ?? [];
  return (
    <AntdLayout className="main_layout">
      <Sider
        breakpoint="xl"
        className="main_layout-sider"
        collapsible
        collapsedWidth={100}
        onCollapse={toggleCollapsed}
        width={295}
        collapsed={collapsed}
      >
        <div className="main_layout-sider-header">
          <Logo title={!collapsed} type="primary" />
        </div>
        <div className="main_layout-sider-workspace">
          <Select
            className="main_layout-sider-select"
            defaultValue={'wayzello'}
            suffixIcon={<BottomArrow className="fill-royal-blue" />}
            labelRender={({ label }) => (
              <Workspace
                onlyIcon={collapsed}
                title={label?.title}
                src={label?.image}
              />
            )}
            optionRender={({ label }) => (
              <Workspace
                onlyIcon={collapsed}
                title={label?.title}
                src={label?.image}
              />
            )}
            options={[
              {
                value: 'wayzello',
                label: {
                  title: 'Wayzello’s workspace',
                  image:
                    'https://png.pngtree.com/background/20230617/original/pngtree-office-essentials-afloat-3d-rendering-of-laptop-and-tools-on-blue-picture-image_3697149.jpg',
                },
              },
              {
                value: 'clickup',
                label: {
                  title: 'clickup’s workspace',
                  image:
                    'https://avatars.slack-edge.com/2022-09-12/4082734075697_dbc16fd4d5a1934e2d6e_512.png',
                },
              },
            ]}
            bordered={false}
          />
        </div>
        <Menu
          onSelect={(e) => navigate(e.key)}
          className="main_layout-menu"
          mode="inline"
          defaultSelectedKeys={[`${pathname}`]}
          items={items as { key: string; icon: string; label: ReactNode }[]}
        />
      </Sider>
      <div className="main_layout-sider-body">
        <Navbar />
        <Breadcrumb
          className="main_layout-sider-breadcrumb"
          items={[
            {
              title: "Wayzello's workspace",
            },
            ...labels,
          ]}
        />
        <div className="main_layout-sider-content">{children}</div>
      </div>
    </AntdLayout>
  );
};
