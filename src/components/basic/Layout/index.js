import React from 'react';
import LayoutContext from '@src/LayoutContext';
import Layout1 from './Layout1';
import Layout2 from './Layout2';

const layout = {
    layout1: Layout1,
    layout2: Layout2
};

class Layout extends React.Component {
    render() {
        return (
            <LayoutContext.Consumer>
                {(value) => {
                    if (value.layout) {
                        const CurrentLayout = layout[value.layout];
                        return (
                            <CurrentLayout>{this.props.children}</CurrentLayout>
                        );
                    }
                    return <React.Fragment children={this.props.children} />;
                }}
            </LayoutContext.Consumer>
        );
    }
}

export default Layout;
