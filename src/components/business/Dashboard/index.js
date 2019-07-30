import React from 'react';
import Header from '../../basic/Header';
import Menu from '../../basic/Menu';
import Footer from '../../basic/Footer';
import { clearToken } from '../../../utils/storage';
import './styles.scss';

const menus = [
    {
        key: 'home',
        title: '首页',
        url: '/'
    },
    {
        key: 'about',
        title: '关于页面',
        url: '/about'
    }
];

class Dashboard extends React.Component {
    logout = () => {
        clearToken('isLogin');
        window.location.reload();
    };
    render() {
        return (
            <div className="dashboard-wrap">
                <Header logout={this.logout} />
                <div className="dashboard-main">
                    <Menu menus={menus} />
                    <div className="dashboard-container">
                        {this.props.children}
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
