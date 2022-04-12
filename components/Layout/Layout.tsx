import React from 'react';
import { Layout as AntdLayout, Menu } from 'antd';
import { useRouter } from 'next/router';
import Footer from '../Footer/Footer';
import classes from './Layout.module.scss';

const { Header, Content } = AntdLayout;
interface LayoutProps {
  children: React.ReactNode;
}

const NAV = [
  {
    name: 'Login',
    path: '/login',
  },
  {
    name: 'Registration',
    path: '/registration',
  },
];

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();

  return (
    <AntdLayout className="layout">
      <Header className={classes.header}>
        <div className={classes.logo} onClick={() => router.push('/')}>
          <img src="/logo.png" width={115} height={34} />
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['login']} className={classes.list}>
          {NAV.map(({ name, path }) => (
            <Menu.Item key={name} onClick={() => router.push(path)} className={classes.titleContent}>
              {name}
            </Menu.Item>
          ))}
        </Menu>
      </Header>
      <Content style={{ padding: '50px', minHeight: 'calc(100vh - 290px)' }}>{children}</Content>
      <Footer />
    </AntdLayout>
  );
};

export default Layout;
