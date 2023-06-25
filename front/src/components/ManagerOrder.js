import {Space, Table, Tag, Image, message, Button, Input} from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse, theme } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Badge, Dropdown} from 'antd';
import "../css/bookDetail.css"
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import React from "react";
const { Column, ColumnGroup } = Table;

dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;


// eslint-disable-next-line arrow-body-style
const disabledDate = () => {
    // Can not select days before today and today
    return null;
};


class ManagerOrder extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            orders:[],
            searchorders:[]
        }
    }

    componentDidMount() {

        fetch("http://localhost:8080/getallorder",{
            method:'POST',
            headers:{'Content-Type':'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({orders:data})
                this.setState({searchorders:data})
            }).catch(function (ex) {
            console.log('parsing failed', ex)
        })
    }



    render() {

        const { Search } = Input;
        const onSearch = (value) => {
            const result=[];
            for(var i = 0; i < this.state.orders.length;i++) {
                const filteredOrders = this.state.orders[i].orderItems.filter(
                    order => order.name.toLowerCase().includes(value.toLowerCase())
                )
                if(filteredOrders.length){
                    result.push(this.state.orders[i])
                }
            }
            this.setState({searchorders:result})
        }


        const columns = [
            {
                title: '订单号',
                dataIndex: 'id',
            },
            {
                title: '用户id',
                dataIndex: 'userid',
            },
            {
                title: '下单时间',
                dataIndex: 'time',
            }
        ];
        const columns2 = [
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
            }
        ];

        const data = [];
        for(var i = 0; i < this.state.searchorders.length;i++){
            data.push({
                key:i+1,
                userid:this.state.searchorders[i].userid,
                id:this.state.searchorders[i].id,
                time:this.state.searchorders[i].time,
                items:this.state.searchorders[i].orderItems,
            })
        }

        const timechange=(time)=>{

            if (!time) {
                this.time = [];
            }
            else{
            const start = dayjs(time[0]).format('YYYY-MM-DD HH:mm:ss');
            const end = dayjs(time[1]).format('YYYY-MM-DD HH:mm:ss')

                const filteredorders = this.state.orders.filter(
                    order => {
                        return order.time.toString() > start.toString()
                            &&
                            order.time.toString() < end.toString();
                    }
                )
                this.setState({searchorders: filteredorders})
             }
        }


        return(
            <div className="Orders">
                <h1 className={"title"}>订单管理</h1>
                <div className={"booktable"}>
                    <RangePicker
                        disabledDate={disabledDate}
                        disabledTime={null}
                        showTime={{
                            hideDisabledOptions: true,
                            defaultValue: [dayjs('00:00:00', 'HH:mm:ss'), dayjs('11:59:59', 'HH:mm:ss')],
                        }}
                        onChange={date=> timechange(date)}
                        format="YYYY-MM-DD HH:mm:ss"
                    />
                </div>
                <div className="searchbar">
                    <Search placeholder="input search text" onSearch={onSearch} enterButton />
                </div>
                <Table
                    className={"booktable"}
                    columns={columns}
                    expandable={{
                        expandedRowRender: (record) => (
                            <Table
                                columns={columns2}
                                dataSource={record.items} />

                        ),
                    }}
                    dataSource={data}
                />
            </div>
        )
    }
}

export default ManagerOrder;