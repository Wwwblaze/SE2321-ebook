import {message, Space} from 'antd';
import React from "react";
import {books} from "../utils/localStorage";
import {orders} from "../utils/localStorage";
import { Button, Input, DatePicker, Tabs, Table } from 'antd';
import { ShoppingFilled, SearchOutlined, LoginOutlined, SettingFilled, DeleteFilled, DownSquareFilled } from '@ant-design/icons';
import "../css/bookDetail.css"
import {history} from "../utils/history";

const { Column, ColumnGroup } = Table;


const columns = [
    {
        title: '书籍封面',
        dataIndex: 'img',
        width: 130,
        render: (record) => <img src={record} alt="" width="80px" />
    },
    {
        title: '书名',
        dataIndex: 'name',
    },
    {
        title: '作者',
        dataIndex: 'author',
    },
    {
        title: '价格',
        dataIndex: 'price',
        width: 110,
    },
    {
        title: '操作',
        dataIndex: 'caozuo',
        render: (_,record) => <Button type="primary" onClick={()=>{
          console.log(record)

            fetch("http://localhost:8080/deleteshopcart",{
                method:'POST',
                headers:{'Content-Type':'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(record),
            })
                .then(response => response.json())
                .then(data => {
                    message.success("删除成功")
                    setTimeout(function(){
                        window.location.reload()
                    },200)
                }).catch(function (ex) {
                console.log('parsing failed', ex)
            })
        }

        }>删除</Button>,
    },
];

class Shopping extends React.Component{

    constructor(props) {
        super(props);
        this.state = {carts:[]}
    }

    componentDidMount() {

        const user = JSON.parse(localStorage.getItem('userinfo'));
        console.log(user.userId)
        fetch("http://localhost:8080/getshopcart",{
            method:'POST',
            headers:{'Content-Type':'application/json',
                'Accept': 'application/json'
            },
            body:JSON.stringify(user.userId)
        })
            .then(response => response.json())
            .then(data => {
                this.setState({carts:data})
            }).catch(function (ex) {
            console.log('parsing failed', ex)
        })

    }




    render() {
        return(
        <div className="Shopping">
            <h1 className={"title"}>My Shopping Cart</h1>


            <Table
                columns={columns}
                dataSource={this.state.carts} />


            <Space wrap>
                <Button type="primary" className={"buybutton"} onClick={()=>{
                    console.log(this.state.carts)

                    fetch("http://localhost:8080/addorder",{
                        method:'POST',
                        headers:{'Content-Type':'application/json',
                            'Accept': 'application/json'
                        },
                        body:JSON.stringify(this.state.carts)
                    })
                        .then(response => response.json())
                        .then(data => {
                            message.success("下单成功")
                            setTimeout(function(){
                                window.location.reload()
                            },200)

                        }).catch(function (ex) {
                        console.log('parsing failed', ex)
                    })
                }}>一键下单</Button>
            </Space>
        </div>
    )
    }
}

export default Shopping;