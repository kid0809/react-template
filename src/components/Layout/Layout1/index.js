import React, { Component } from 'react';
import Header from '../../Header';
import Menu from '../../Menu';
import Footer from '../../Footer';
import './styles.scss';

const menus = [
    {
        key: 'home',
        title: '首页',
        url: '/home'
    },
    {
        key: 'about',
        title: '关于页面',
        url: '/about'
    }
];

class Layout1 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="layout1-wrap">
                <div className="layout1-header">
                    <Header />
                </div>

                <div className="layout1-main">
                    <div className="layout1-side">
                        <Menu menus={menus} />
                    </div>

                    <div className="layout1-container">
                        <div className="layout1-content">
                            {this.props.children}
                        </div>
                        <div className="layout1-footer">
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Layout1;
