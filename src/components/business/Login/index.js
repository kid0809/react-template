import React from 'react';
import { setToken } from '../../../utils/storage';

class Login extends React.Component {
    login = () => {
        setToken('isLogin', 'true');
        const { location, history } = this.props;

        if (location.state && location.state.nextPathname) {
            history.replaceState(null, location.state.nextPathname);
        } else {
            history.replaceState(null, '/');
        }
    };
    render() {
        return (
            <div className="login-wrap">
                <button onClick={this.login}>登录</button>
            </div>
        );
    }
}

export default Login;
