import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  FormOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import { dashboardRoutes } from "@constants/dashboardRoutes";
import { Dropdown, Layout, Menu, Typography } from "antd";
import { useRouter } from "next/router";
import { createElement, useState } from "react";
import classes from "./DashboardLayout.module.scss";

const { Header, Sider, Content } = Layout;

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const activeRoute = dashboardRoutes.find((item) =>
    router.pathname.includes(item.route)
  )?.name;

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className={classes.layoutWrapper}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div
          className={classes.logo}
          onClick={() => router.push("/dashboard/products")}
        >
          <img src="/logo-min.png" width={34} height={34} />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={activeRoute ? [activeRoute] : undefined}
        >
          {dashboardRoutes.map(({ icon, name, route }) => (
            <Menu.Item
              key={name}
              icon={icon}
              onClick={() => router.push(route)}
            >
              {name}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: "0 24px",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: "trigger",
            onClick: toggle,
          })}
          <Dropdown.Button
            overlay={
              <Menu>
                <Menu.Item key="1" icon={<ContactsOutlined />}>
                  My profile
                </Menu.Item>
                <Menu.Item key="2" icon={<FormOutlined />}>
                  Change password
                </Menu.Item>
                <Menu.Item key="3" icon={<LogoutOutlined />}>
                  Logout
                </Menu.Item>
              </Menu>
            }
            placement="bottom"
            icon={<UserOutlined />}
          >
            <Typography.Paragraph className={classes.userText}>
              Tom Hanks
            </Typography.Paragraph>
          </Dropdown.Button>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            padding: 42,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
