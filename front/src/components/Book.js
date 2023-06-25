import React from 'react';
import { Card } from 'antd';

import {Link} from "react-router-dom";

const { Meta } = Card;

export class Book extends React.Component{


    render() {

        const {info} = this.props;


        return (
            <Link to='/Home/bookDetails' state={{info:info}} >
                <Card
                    hoverable
                    style={{width: 181}}
                    cover={<img alt="image" src={info.image} className={"bookImg"}/>}
                >
                    <Meta title={info.name} description={'¥' + info.price}/>
                </Card>
            </Link>
        );
    }
    }
