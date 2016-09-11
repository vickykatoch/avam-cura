import React, {Component, PropTypes} from 'react';
import {AppBar} from 'avam-material/lib/appbar/index';
import {IconButton} from 'avam-material/lib/button/index';

class Header extends Component {

    render() {
        return (
                <AppBar fixed flat rightIcon="menu" title="AVAM Cura" />
        );
    }
}
Header.contextTypes = {
    theme: PropTypes.object
}
export default Header;