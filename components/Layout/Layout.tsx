import React from "react";
import { Layout as AntdLayout, Menu } from "antd";
import { useRouter } from "next/router";

const { Header, Content, Footer } = AntdLayout;

interface LayoutProps {
  children: React.ReactNode;
}

const NAV = [
  {
    name: "Login",
    path: "/login",
  },
  {
    name: "Registration",
    path: "/registration",
  },
];

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();

  return (
    <AntdLayout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["login"]}>
          {NAV.map(({ name, path }) => (
            <Menu.Item key={name} onClick={() => router.push(path)}>
              {name}
            </Menu.Item>
          ))}
        </Menu>
      </Header>
      <Content style={{ padding: "50px", minHeight: "calc(100vh - 134px)" }}>
        {children}
      </Content>
      <Footer style={{ textAlign: "center", backgroundColor: "#d3d3d3" }}>
        Footer
      </Footer>
    </AntdLayout>
  );
};

export default Layout;
