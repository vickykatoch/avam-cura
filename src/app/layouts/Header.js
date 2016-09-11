import React, {Component, PropTypes} from 'react';
import {AppBar} from 'avam-material/lib/appbar/index';
import {IconButton} from 'avam-material/lib/button/index';
import {Sidebar} from 'avam-material/lib/button/index';

class Header extends Component {
    constructor(props){
        super(props);
        this.onMenuClick=this.onMenuClick.bind(this);
    }
    onMenuClick(){
        alert('yes');
    }
    render() {
        return (
                <AppBar fixed flat rightIcon="menu" title="AVAM Cura"onRightIconClick={this.onMenuClick} />
        );
    }
}
Header.contextTypes = {
    theme: PropTypes.object
}
export default Header;