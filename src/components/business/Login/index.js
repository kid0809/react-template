import React from 'react';
import { setToken } from '../../../utils/storage';

class Login extends React.Component {
    login = () => {
        setToken('isLogin', 'true');
        this.props.history.push('/');
    }
    render() {
        return (
            <div className="login-wrap">
                <button onClick={this.login}>登录</button>
            </div>
        );
    }
}

export default Login;
