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
    getItem('Book Manage', '/Manager/Book', <BookTwoTone />),
    getItem('Add Book', '/Manager/AddBook', <BookTwoTone />),
    getItem('Order Manage', '/Manager/Order', <ShoppingTwoTone />),
    getItem('User Manage', '/Manager/User', <TabletTwoTone />),
    getItem('Order Statistics', '/Manager/OrderStatistics', <ShoppingTwoTone />),
    getItem('Book Statistics', '/Manager/BookStatistics', <ShoppingTwoTone />),
];


const MSideBar = () =>
{

    const navigate = useNavigate();
    const onClick = (e) => {
        navigate(e.key, {replace: true})
    };

    return(
        <Menu onClick={onClick} style={{width: 256}} mode="vertical" items={items}/>
    );

}

export default MSideBar;