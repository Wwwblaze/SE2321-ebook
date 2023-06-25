import {message, Space} from 'antd';
import React from "react";
import "../css/bookDetail.css"
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import {books} from "../utils/localStorage";
import {orders} from "../utils/localStorage";
import { Button, Input, DatePicker, Tabs, Table } from 'antd';
import { ShoppingFilled, SearchOutlined, LoginOutlined, SettingFilled, DeleteFilled, DownSquareFilled } from '@ant-design/icons';
import "../css/bookDetail.css"
import {history} from "../utils/history";

const { Column, ColumnGroup } = Table;


dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;


// eslint-disable-next-line arrow-body-style
const disabledDate = () => {
    // Can not select days before today and today
    return null;
};
class OrderStatistics extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            orderitems:[],
            display:[]
        }
    }


    componentDidMount() {

        fetch("http://localhost:8080/getallorderitem",{
            method:'POST',
            headers:{'Content-Type':'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({orderitems:data});
            }).catch(function (ex) {
        })

    }


    render() {

        const timechange=(time)=>{

            if (!time) {
                this.time = [];
            }
            else{
                const start = dayjs(time[0]).format('YYYY-MM-DD HH:mm:ss');
                const end = dayjs(time[1]).format('YYYY-MM-DD HH:mm:ss')

                const filtered = this.state.orderitems.filter(
                    orderitems => {
                        return orderitems.time.toString() > start.toString()
                            &&
                            orderitems.time.toString() < end.toString();
                    }
                )

                //筛选展示出来的内容
                const result=[];
                for(var i = 0; i < filtered.length; i++){
                    var flag = false;

                    for(var j = 0; j < result.length;j++){
                        if(filtered[i].userid === result[j].userid){
                            result[j].cost+=filtered[i].price;
                            flag = true;
                            break;
                        }
                    }
                    if(flag === false){
                        result.push({
                            userid:filtered[i].userid,
                            cost:filtered[i].price
                        })
                    }
                }

                result.sort((a, b) => {
                    return a.cost < b.cost ? 1 : -1;
                })
                this.setState({display:result})
            }
        }


        const columns = [
            {
                title: '用户id',
                dataIndex: 'userid',
            },
            {
                title: '累计消费(元)',
                dataIndex: 'cost',
            },
        ];

        return(
            <div className="Users">
                <h1 className={"title"}>用户消费榜</h1>
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
                <Table
                    className={"booktable"}
                    columns={columns}
                    dataSource={this.state.display} />
            </div>
        )
    }
}

export default OrderStatistics;