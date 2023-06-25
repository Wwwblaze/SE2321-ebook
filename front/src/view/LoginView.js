import React from "react";
import '../css/login.css';
import "antd/dist/reset.css"

import WrappedLoginForm from "../components/LoginForm";
import withRouter from "../withRouter";

export function LoginView(props){
        return(
            <div className="login-page">
                <div className="login-container">
                    <div className="login-box">
                        <h1 className="page-title">登录</h1>
                        <div className="login-content">
                            <WrappedLoginForm />
                        </div>
                    </div>
                </div>
            </div>
        );


}
export default withRouter(LoginView);