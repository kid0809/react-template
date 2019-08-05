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

class Layout2 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="layout2-wrap">
                <div className="layout2-header">
                    <Header />
                </div>

                <div className="layout2-main">
                    <div className="layout2-container">
                        <div className="layout2-content">
                            {this.props.children}
                        </div>
                        <div className="layout2-footer">
                            <Footer />
                        </div>
                    </div>
                    <div className="layout2-side">
                        <Menu menus={menus} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Layout2;
