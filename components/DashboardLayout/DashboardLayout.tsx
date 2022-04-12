import { LogoutOutlined, UserOutlined, FormOutlined, ContactsOutlined } from '@ant-design/icons';
import { dashboardRoutes } from '@constants/dashboardRoutes';
import { Dropdown, Layout, Menu, Typography } from 'antd';
import { useRouter } from 'next/router';
import { useState } from 'react';
import classes from './DashboardLayout.module.scss';

const { Header, Sider, Content } = Layout;

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(true);
  const activeRoute = dashboardRoutes.find(item => router.pathname.includes(item.route))?.name;

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className={classes.layoutWrapper}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={toggle}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 10,
        }}
      >
        <div className={classes.logo} onClick={() => router.push('/dashboard/products')}>
          <img src="/logo-min.png" width={34} height={34} />
        </div>
        <Menu theme="dark" selectedKeys={activeRoute ? [activeRoute] : undefined}>
          {dashboardRoutes.map(({ icon, name, route }) => (
            <Menu.Item key={name} icon={icon} onClick={() => router.push(route)}>
              {name}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: '0 24px',
            color: 'white',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            position: 'fixed',
            zIndex: 1,
            width: '100%',
          }}
        >
          <Dropdown.Button
            overlay={
              <Menu>
                <Menu.Item key="1" icon={<ContactsOutlined />}>
                  My profile
                </Menu.Item>
                <Menu.Item key="2" icon={<FormOutlined />}>
                  Change password
                </Menu.Item>
                <Menu.Item key="3" icon={<LogoutOutlined />} onClick={() => router.push('/')}>
                  Logout
                </Menu.Item>
              </Menu>
            }
            placement="bottom"
            icon={<UserOutlined />}
          >
            <Typography.Paragraph className={classes.userText}>Tom Hanks</Typography.Paragraph>
          </Dropdown.Button>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            padding: collapsed ? '88px 42px 0 120px' : '88px 42px 0 240px',
            minHeight: 280,
            transition: 'all 0.2s',
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
