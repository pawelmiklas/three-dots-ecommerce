import React from "react";
import { Divider, Layout as AntdLayout, Menu } from "antd";
import { useRouter } from "next/router";
import Footer from "../Footer/Footer";
import classes from "./Layout.module.scss";
import TopBar from "./Nav/TopBar";
import MidBar from "./Nav/MidBar";
import MainMenu from "./Nav/MainMenu";

const { Header, Content } = AntdLayout;
interface LayoutProps {
  children: React.ReactNode;
}


const Layout = ({ children }: LayoutProps) => {

  return (
    <AntdLayout className="layout">
      <Header className={classes.header}>
      <TopBar/>
      <MidBar/>
      <MainMenu/>
      </Header>
      <Content style={{ padding:"50px",paddingTop:'10px', minHeight: "calc(100vh - 290px)", backgroundColor:'white' }}>
        {children}
      </Content>
      <Footer />
    </AntdLayout>
  );
};

export default Layout;
