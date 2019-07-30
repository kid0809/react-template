import React from 'react';
import './styles.scss';

class Home extends React.Component {
    goto = () => {
        this.props.history.push('/about');
    };
    render() {
        const array = [1, 2, 3, 4, 5];

        return (
            <div className="home-wrap">
                <div onClick={this.goto}>home's page!!!</div>
                <ul>
                    {array.map((data) => {
                        return <li key={data}>{data}</li>;
                    })}
                </ul>
            </div>
        );
    }
}
export default Home;
