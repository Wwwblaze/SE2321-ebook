import React from 'react';
import {Descriptions, Button, message} from 'antd';
import '../css/bookDetail.css'
import {nowuser} from "../utils/localStorage";
import {useLocation} from "react-router-dom";
import qs  from 'qs';
import {storage} from "../utils/localStorage";
import {history} from "../utils/history";

export  default function BookDetail (){

    let {state} = useLocation();
    const info = state.info;

        return (
            <div className={"content"}>
                <div className={"book-detail"}>
                    <div className={"book-image"}><img alt="image" src={info.image} style={{width:"350px", height:"350px"}}/></div>
                    <div className={"descriptions"}>
                        <Descriptions>
                            <Descriptions.Item className={"title"} span={3}>{info.name}</Descriptions.Item>
                            <Descriptions.Item label={"作者"} span={3}>{info.author}</Descriptions.Item>
                            <Descriptions.Item label={"分类"} span={3}>{info.type}</Descriptions.Item>
                            <Descriptions.Item label={"定价"} span={3}>{<span className={"price"}>{'¥' + info.price}</span>}</Descriptions.Item>
                            <Descriptions.Item label={"状态 "} span={3}>{info.inventory !== 0? <span>有货 <span className={"inventory"}>库存{info.inventory}件</span></span> : <span className={"status"}>无货</span>}</Descriptions.Item>
                            <Descriptions.Item label={"作品简介"} span={3}>{info.description}</Descriptions.Item>
                        </Descriptions>
                    </div>
                </div>
                <div className={"button-groups"}>
                    <Button  icon="" size={"large"} onClick={()=>{

                        const user = JSON.parse(localStorage.getItem('userinfo'));
                        var data={
                            bookid:info.id,
                            img:info.image,
                            userid:user.userId,
                            name:info.name,
                            author:info.author,
                            price:info.price,
                        }
                        console.log(data)
                        fetch("http://localhost:8080/addshopcart",{
                            method:'POST',
                            headers:{'Content-Type':'application/json',
                                'Accept': 'application/json'
                            },
                            body: JSON.stringify(data),
                        })
                            .then(response => response.json())
                            .then(data => {
                            }).catch(function (ex) {
                            console.log('parsing failed', ex)
                        })
                        message.success("添加购物车成功")
                    }
                    }>
                        加入购物车
                    </Button>

                    {/*<Button  icon="" size={"large"} style={{marginLeft:"15%"}} ghost onClick={()=>{*/}
                    {/*    console.log(storage.user)*/}
                    {/*  if(storage.user == 1){*/}
                    {/*      message.error("您不是管理员")*/}
                    {/*  }*/}
                    {/*  if(storage.user == 2){*/}
                    {/*      var id = info.id*/}
                    {/*      console.log(id+"")*/}
                    {/*      var idJson = JSON.stringify({id:id+''})*/}
                    {/*      console.log(idJson)*/}
                    {/*      fetch("http://localhost:8080/deletebook",{*/}
                    {/*          method:'POST',*/}
                    {/*          headers:{'Content-Type':'application/json',*/}
                    {/*              'Accept': 'application/json'*/}
                    {/*          },*/}
                    {/*          body: idJson*/}
                    {/*      })*/}
                    {/*          .then(response => response.json())*/}
                    {/*          .then(data => {*/}

                    {/*          }).catch(function (ex) {*/}
                    {/*          console.log('parsing failed', ex)*/}
                    {/*      })*/}
                    {/*      message.success("删除成功")*/}

                    {/*  }*/}


                    {/*}*/}
                    {/*}>*/}
                    {/*    删除该书*/}
                    {/*</Button>*/}
                </div>
            </div>


        )


}
