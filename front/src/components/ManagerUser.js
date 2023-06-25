import {Space, Table, Tag, Image, message, Button} from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse, theme } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Badge, Dropdown} from 'antd';
import "../css/bookDetail.css"
import React from "react";
import {history} from "../utils/history";
const { Column, ColumnGroup } = Table;

class ManagerUser extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            users:[]
        }
    }


    componentDidMount() {

        fetch("http://localhost:8080/getalluser",{
            method:'POST',
            headers:{'Content-Type':'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({users:data});
            }).catch(function (ex) {
        })

    }



    render() {

        const columns = [
            {
                title: '用户id',
                dataIndex: 'userId',
            },
            {
                title: '用户头像',
                dataIndex: 'icon',
                render: (record) => <img src={record} alt="" width="70px" height="70px"/>
            },
            {
                title: '用户名',
                dataIndex: 'username',
            },
            {
                title: '用户权限',
                dataIndex: 'authority',
            },
            {
                title: '禁用用户',
                dataIndex: 'jinyong',
                render: (_,record) => <Button  onClick={()=>{

                    fetch("http://localhost:8080/banuser",{
                        method:'POST',
                        headers:{'Content-Type':'application/json',
                            'Accept': 'application/json'
                        },
                        body:JSON.stringify(record)
                    })
                        .then(response => response.json())
                        .then(data => {
                            message.success("禁用成功");
                            setTimeout(function(){
                                window.location.reload()
                            },200)
                        }).catch(function (ex) {
                    })
                }
                }>禁用</Button>,
            },
            {
                title: '解禁用户',
                dataIndex: 'jiejin',
                render: (_,record) => <Button  onClick={()=>{

                    fetch("http://localhost:8080/unbanuser",{
                        method:'POST',
                        headers:{'Content-Type':'application/json',
                            'Accept': 'application/json'
                        },
                        body:JSON.stringify(record)
                    })
                        .then(response => response.json())
                        .then(data => {
                            message.success("解禁成功");
                            setTimeout(function(){
                                window.location.reload()
                            },200)
                        }).catch(function (ex) {
                    })

                }
                }>解禁</Button>,
            },
        ];

        return(
            <div className="Users">
                <h1 className={"title"}>用户管理</h1>
                <Table
                    columns={columns}
                    dataSource={this.state.users} />
            </div>
        )
    }
}

export default ManagerUser;