import {Button, Form, Input, Menu, message, Modal, Select} from 'antd';
import React, { useState } from 'react';
import TextArea from "antd/es/input/TextArea";

const CButton = (props) =>
{
    const [fields, setFields] = useState([]);
    const [visiable, setVisiable] = useState(false);
    const [form] = Form.useForm();
    // 打开弹窗
    const open = () => {
        setVisiable(true);
        setFields([
            {
                name: ['isbn'],
                value: props.info.isbn,
            },
            {
                name: ['name'],
                value: props.info.name,
            },
            {
                name: ['type'],
                value: props.info.type,
            },
            {
                name: ['author'],
                value: props.info.author,
            },
            {
                name: ['price'],
                value: props.info.price,
            },
            {
                name: ['inventory'],
                value: props.info.inventory,
            },
            {
                name: ['description'],
                value: props.info.description,
            },
            {
                name: ['image'],
                value: props.info.image,
            },

        ]);
    };
    //关闭弹窗
    const close = () => {
        setVisiable(false);
    };
    //点击确定提交表单
    const submit = ()=>{
        form.submit()
    }
    // 提交后获取表单数据，请求接口，重置表单并关闭
    const onSubmit = (values) =>{
        const data = values
        data.id = props.info.id
        console.log(data)


        fetch("http://localhost:8080/addbook",{
            method:'POST',
            headers:{'Content-Type':'application/json',
                'Accept': 'application/json'
            },
            body:JSON.stringify(data)
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

        form.resetFields();
        close()
    }
    return (

        <div>
            <div className="text-center">
                <Button type="primary" onClick={open}>
                    修改
                </Button>
            </div>
            <Modal
                wrapClassName="modal-wrap"
                okText="提交修改"
                cancelButtonProps={{ shape: 'round' }}
                okButtonProps={{ shape: 'round' }}
                width={600}
                visible={visiable}
                title="修改信息"
                onCancel={close}
                onOk={submit}
            >
                <div className="form">
                    <Form
                        onFieldsChange={(_, allFields) => {
                        setFields(allFields);
                    }}
                        form={form}
                        fields={fields} labelCol={{ span: 4 }} wrapperCol={{ span: 16 }} onFinish={onSubmit}>
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
                    </Form>

                </div>
            </Modal>
        </div>
    );

}

export default CButton;