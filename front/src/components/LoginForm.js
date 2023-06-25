import React from 'react';
import {Input, Button, Checkbox, message} from 'antd';
import { Icon ,Form} from '@ant-design/compatible';
import '../css/login.css'
import {history} from '../utils/history';
import {storage} from "../utils/localStorage";
import Register from "./Register";

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {quanxian : 0};
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const {username, password} = values;

                fetch("http://localhost:8080/login",{
                    method:'POST',
                    headers:{'Content-Type':'application/json',
                             'Accept': 'application/json'
                    },
                    body: JSON.stringify({username:username,password:password}),
                })
                    .then(response => response.json())
                    .then(data => {
                         console.log(data)
                         if(data.authority === 2){
                             message.success("管理员登录");
                             localStorage.setItem("userinfo",JSON.stringify(data));
                             setTimeout(function(){
                                 history.push('/Manager/Book')
                                 window.location.reload()

                             },500)
                         }
                         else if(data.authority === 1){
                             message.success("登录成功");
                             localStorage.setItem("userinfo",JSON.stringify(data));
                             setTimeout(function(){
                                 history.push('/Home/Book')
                                 window.location.reload()

                             },500)
                         }
                         else{
                             message.error("您的账号已经被禁用")
                         }
                    }).catch(function (ex) {
                    message.error("用户不存在，请检查用户名和密码")
                })


            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="用户名"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="密码"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>记住密码</Checkbox>)}
                    {/*<a className="login-form-forgot" href="">*/}
                    {/*    注册账号*/}
                    {/*</a>*/}
                    <div className={"login-form-forgot"}>
                    <Register/>
                    </div>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedLoginForm = Form.create({ name: 'normal_login' })(LoginForm);

export default WrappedLoginForm
