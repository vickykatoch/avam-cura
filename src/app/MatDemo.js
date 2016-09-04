import React, {Component} from 'react';
import {AppBar} from 'avam-material/lib/appbar';

class MatDemo extends Component {
    render() {
        return (
            <div>
                 <AppBar {...this.props}>
                    React Application Bar
                </AppBar>
            </div>
        );
    }
}

export default MatDemo;