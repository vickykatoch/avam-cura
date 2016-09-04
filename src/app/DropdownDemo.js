import React, {Component} from 'react';
import {Dropdown} from '../common/components/dropdown/index';

const countries = [
    { value: 'EN-gb', label: 'England' },
    { value: 'ES-es', label: 'Spain' },
    { value: 'TH-th', label: 'Thailand' },
    { value: 'EN-en', label: 'USA' }
];


class DropdownDemo extends Component {

    constructor(props) {
        super(props);
        this.state = { value: 'ES-es' };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(value) {
        this.setState({ value: value });
    }

    render() {
        return (
            <div>
                <Dropdown
                    auto
                    onChange={this.handleChange}
                    source={countries}
                    value={this.state.value}
                    />

            </div>
        );
    }
}

export default DropdownDemo;