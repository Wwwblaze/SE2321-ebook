import React from 'react';
import { useNavigate, Routes, Route ,Outlet} from 'react-router-dom'
import { Layout, theme } from 'antd';
import HeaderInfo from "../components/HeaderInfo";
import SideBar from "../components/SideBar";
import '../css/home.css'
import withRouter from "../withRouter";
import {storage} from "../utils/localStorage";

const { Header, Content, Sider, Footer } = Layout;


const Home  = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

        return (
            <Layout className="layout">
                <Header>
                    <HeaderInfo />
                </Header>
                <Layout>
                    <Sider width={200}
                           style={{
                               background: colorBgContainer,
                           }}>
                        <SideBar />
                    </Sider>
                    <Content style={{ padding: '0 50px' }}>
                        <div className="home-content">
                            <Outlet />
                        </div>
                    </Content>
                </Layout>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        );

};

export default withRouter(Home);