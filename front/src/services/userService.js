import {history} from "../utils/history";
import {message} from 'antd';
import {useNavigate} from "react-router";
import { Link , Redirect } from "react-router-dom";
export const Login = (data) => {

    console.log("进入判断")
        if (data.username === '123' && data.password === '123') {
            console.log("信息正确")
            message.error("登录信息正确")
            history.push('Home')
        }
        else {
            // console.log("信息错误")
            message.error("登录信息错误");
        }

};

export function T(){
    const navigate= useNavigate();
    navigate('/Home');
}

    // const url = `${config.apiUrl}/login`;
    // const callback = (data) => {
    //     if(data.status >= 0) {
    //         localStorage.setItem('user', JSON.stringify(data.data));
    //         history.push("/");
    //         message.success(data.msg);
    //     }
    //     else{
    //         message.error(data.msg);
    //     }
    // };
    // postRequest(url, data, callback);


