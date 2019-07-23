import React, { Component } from 'react';
import './styles.scss';
class Detail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="detail-wrap">
                detail id: {this.props.match.params.id}
            </div>
        );
    }
}

export default Detail;
