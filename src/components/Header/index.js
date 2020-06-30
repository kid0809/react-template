import React from 'react';
import { withRouter } from 'react-router-dom';
import { clearToken } from '@src/utils/storage';
import './styles.scss';

const Header = ({ history }) => {
    return (
        <div className="header-wrap">
            <button
                onClick={() => {
                    clearToken('isLogin');
                    history.push('/');
                }}
            >
                登出
            </button>
        </div>
    );
};

export default withRouter(Header);
