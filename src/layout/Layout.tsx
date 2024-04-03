import { ReactNode } from 'react';
import { Layout as AntdLayout, Menu } from 'antd';
import { routes } from 'src/routes/routes';
import { useLocation, useNavigate } from 'react-router-dom';
import { Logo } from 'src/assets/icons/Logo/logo';
import { Navbar } from './Nav/Navbar';

const { Sider } = AntdLayout;
export const layoutKey = 'main_layout';

export const Layout = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const items =
    routes
      ?.find((route) => route.key === layoutKey)
      ?.routes?.filter((el) => el.showInMenu)
      .map(({ icon, path, label }) => ({
        key: path,
        icon: icon,
        label: label,
      })) ?? [];
  const { pathname } = useLocation();
  return (
    <AntdLayout className="main_layout">
      <Sider
        breakpoint="xxl"
        className="main_layout-sider"
        collapsedWidth="0"
        width={295}
        collapsible
        trigger={null}
        defaultCollapsed={false}
        collapsed={false}
      >
        <div className="main_layout-sider-header">
          <Logo type="primary" />
        </div>
        <Menu
          onSelect={(e) => navigate(e.key)}
          className="main_layout-menu"
          mode="inline"
          defaultSelectedKeys={[`${pathname}`]}
          items={items as { key: string; icon: string; label: string }[]}
        />
      </Sider>
      <div className="main_layout-sider-body">
        <Navbar />
        <div className="main_layout-sider-content">{children}</div>
      </div>
    </AntdLayout>
  );
};
