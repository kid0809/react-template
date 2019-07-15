import React, { Component } from 'react';
import Header from '../../basic/Header';
import Menu from '../../basic/Menu';
import Footer from '../../basic/Footer';
import Content from './Content';
import ErrorBoundary from '../ErrorBoundary';
import menus from '../../../../config/menus.json';
import { clearToken } from '../../../utils/storage';
import './styles.scss';

class Dashboard extends Component {
    logout = () => {
        clearToken('isLogin');
        this.props.history.push('/');
    }
    render() {
        return (
            <div className="dashboard-wrap">
                <Header logout={this.logout} />
                <div className="dashboard-main">
                    <ErrorBoundary>
                        <Menu menus={menus} />
                        <div className="dashboard-container">
                            <Content />
                            <Footer />
                        </div>
                    </ErrorBoundary>
                </div>
            </div>
        );
    }
}

export default Dashboard;
