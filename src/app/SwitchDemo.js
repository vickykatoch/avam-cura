import React, {Component} from 'react';
import {Switch} from '../common/components/switch/index';

class SwitchDemo extends Component {
    state = {
        switch_1: true,
        switch_2: false,
        switch_3: true
    };

    handleChange = (field, value) => {
        this.setState({...this.state, [field]: value});
};


render() {
    return (
        <section>
            <Switch
                checked={this.state.switch_1}
                label="Push notifications"
                onChange={this.handleChange.bind(this, 'switch_1') }
                />
            <Switch
                checked={this.state.switch_2}
                label="Mail notifications"
                onChange={this.handleChange.bind(this, 'switch_2') }
                />
            <Switch
                checked={this.state.switch_3}
                disabled
                label="Nothing, thanks"
                onChange={this.handleChange.bind(this, 'switch_3') }
                />
        </section>
        );
    }
}

export default SwitchDemo;