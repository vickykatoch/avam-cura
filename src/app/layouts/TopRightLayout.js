import React, {Component, PropTypes} from 'react';
import {AppBar} from 'avam-material/lib/appbar/index';
import {IconButton} from 'avam-material/lib/button/index';

class TopRightLayout extends Component {
    render() {
        return (
            <div>
                <AppBar fixed rightIcon="menu">
                 <IconButton icon='menu' inverse={ true } />
                    {this.props.header}
                </AppBar>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
TopRightLayout.propTypes = { 
    header : PropTypes.node,     
    children : PropTypes.node
}
export default TopRightLayout;