import {Space, Table, Tag, Image, message, Button} from 'antd';
import {Checkbox, Form, Input } from 'antd';
import "../css/bookDetail.css"
import React from "react";
import {history} from "../utils/history";
import TextArea from "antd/es/input/TextArea";
const { Column, ColumnGroup } = Table;

class ManagerAddBook extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
        }
    }


    componentDidMount() {

    }



    render() {
        const onFinish = (values) => {
            console.log(values);
            fetch("http://localhost:8080/addbook",{
                method:'POST',
                headers:{'Content-Type':'application/json',
                    'Accept': 'application/json'
                },
                body:JSON.stringify(values)
            })
                .then(response => response.json())
                .then(data => {
                    message.success("添加成功")
                    setTimeout(function(){
                        window.location.reload()
                    },200)
                }).catch(function (ex) {
                console.log('parsing failed', ex)
            })
        }
        const onFinishFailed = (errorInfo) => {

        };


        return(
            <div className="AddBook">
                <Form
                    className={"Form"}
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="ISBN"
                        name="isbn"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the book ISBN!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="书名"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the book name!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="书籍类型"
                        name="type"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the book type!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="作者"
                        name="author"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the book author!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="价格"
                        name="price"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the book price!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="库存量"
                        name="inventory"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the book inventory!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="简介"
                        name="description"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the book description!',
                            },
                        ]}
                    >
                        <TextArea rows={4} />
                    </Form.Item>

                    <Form.Item
                        label="书籍封面"
                        name="image"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the book image!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default ManagerAddBook;