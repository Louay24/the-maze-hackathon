import { ReactNode, useEffect, useReducer } from 'react';
import { Layout as AntdLayout, Menu, Select, Tooltip } from 'antd';
import { routes } from 'src/routes/routes';
import {
  createSearchParams,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { Logo } from 'src/assets/icons/Logo/logo';
import { Navbar } from './Nav/Navbar';
import { Workspace } from 'src/components/Worspace/Workspace';
import { BottomArrow } from 'src/assets/icons/BottomArrow/BottomArrow';

const { Sider } = AntdLayout;
export const layoutKey = 'main_layout';
export enum themes {
  healthCare = 'healthCare',
  bi = 'bi',
  industry = 'industry',
  agriculture = 'agriculture',
}
export const Layout = ({ children }: { children: ReactNode }) => {
  const [themeParams, setThemeParams] = useSearchParams();
  const currentTheme: themes = themeParams.get('theme')
    ? themes[themeParams.get('theme') as unknown as string] ?? themes.healthCare
    : themes.healthCare;

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
          title: <a href={path}>{currentRoute.label}</a>,
        });
      }
    });
  const items = mainLayoutRoutes
    ?.filter((el) => el.showInMenu && el?.theme === themeParams?.get('theme'))
    .map(({ icon, path, label, suffix, theme }) => {
      const labelItem = (
        <div className="main_layout-sider-label">
          {label}
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
    });
  useEffect(() => {
    setThemeParams({
      theme: currentTheme,
    });
    if (items?.[0]?.key) {
      navigate({
        pathname: items?.[0]?.key,
        search: `?${createSearchParams({
          theme: currentTheme,
        })}`,
      });
    }
  }, [currentTheme]);
  useEffect(() => {
    if (items?.[0]?.key) {
      navigate({
        pathname: items?.[0]?.key,
        search: `?${createSearchParams({
          theme: currentTheme,
        })}`,
      });
    }
  }, [items?.[0]?.key]);
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
            value={themeParams.get('theme')}
            suffixIcon={<BottomArrow className="fill-royal-blue" />}
            labelRender={({ label }: any) => (
              <Workspace
                onlyIcon={collapsed}
                title={label?.title}
                src={label?.image}
              />
            )}
            optionRender={({ label }: any) => (
              <Workspace
                onlyIcon={collapsed}
                title={label?.title}
                src={label?.image}
              />
            )}
            onChange={(value: string) => {
              setThemeParams({ theme: value });
            }}
            options={options}
            bordered={false}
          />
        </div>
        <Menu
          onSelect={(e) =>
            navigate({
              pathname: e.key,
              search: `?${createSearchParams({
                theme: currentTheme,
              })}`,
            })
          }
          className="main_layout-menu"
          mode="inline"
          selectedKeys={[`${pathname}`]}
          items={items as { key: string; icon: string; label: ReactNode }[]}
        />
      </Sider>
      <div className="main_layout-sider-body">
        <Navbar />

        <div className="main_layout-sider-content">{children}</div>
      </div>
    </AntdLayout>
  );
};

const options = [
  {
    value: themes.healthCare,
    label: {
      title: 'Health Care',
      image:
        'https://logo.com/image-cdn/images/kts928pd/production/f3021d740cbe7fed916212dd44f6a54428be3f63-731x731.png?w=1080&q=72',
    },
  },
  {
    value: themes.bi,
    label: {
      title: 'Bi',
      image: 'https://logopond.com/logos/c336f8bb2835274f5e350dd3e683ee4d.png',
    },
  },
  {
    value: themes.industry,
    label: {
      title: 'industrie 4.0',
      image: 'https://logopond.com/logos/c336f8bb2835274f5e350dd3e683ee4d.png',
    },
  },
  {
    value: themes.agriculture,
    label: {
      title: 'agriculture',
      image: 'https://logopond.com/logos/c336f8bb2835274f5e350dd3e683ee4d.png',
    },
  },
];
