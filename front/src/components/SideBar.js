import {NavLink, useNavigate} from "react-router-dom";
import { BookTwoTone, ShoppingTwoTone, TabletTwoTone, SettingTwoTone } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
const { Header, Content, Footer, Sider } = Layout;


function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}


const items = [
    getItem('Book List', '/Home/Book', <BookTwoTone />),
    getItem('My Shopping Cart', '/Home/Shopping', <ShoppingTwoTone />),
    getItem('My Orders', '/Home/Orders', <TabletTwoTone />),
    getItem('My Profile', '/Home/Profile', <SettingTwoTone />),
    getItem('My Statistics', '/Home/Statistics', <TabletTwoTone />),
];


const SideBar = () =>
{

    const navigate = useNavigate();
    const onClick = (e) => {
        navigate(e.key, {replace: true})
    };

    return(
        <Menu onClick={onClick} style={{width: 256}} mode="vertical" items={items}/>
    );

}

export default SideBar;

