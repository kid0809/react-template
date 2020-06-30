import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { getToken } from '@src/utils/storage';

class AuthRoute extends React.Component {
    componentDidMount() {
        const { layout } = this.props;
        this.layoutChange(layout);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.layout !== this.props.layout) {
            this.layoutChange(nextProps.layout);
        }
    }

    layoutChange = (layout) => {
        this.props.layoutChange(layout);
    };

    render() {
        const { path, auth } = this.props;
        const Component = this.props.component;
        return (
            <Route
                path={path}
                render={(props) => {
                    // 需要验证并没有验证时跳转到登录页面
                    if (auth && !getToken('isLogin')) {
                        return <Redirect to="/login" />;
                    }

                    // 已经验证的登录页跳转到主页
                    if (path === '/login' && getToken('isLogin')) {
                        return <Redirect to="/" />;
                    }

                    return <Component {...props} />;
                }}
            />
        );
    }
}

export default AuthRoute;
