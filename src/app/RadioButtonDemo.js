import React, {Component} from 'react';
import {RadioGroup, RadioButton } from '../common/components/radio/index';

class RadioButtonDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'vvendetta'
        };
        this.handleChange=this.handleChange.bind(this);
    }


    handleChange(value) {
        this.setState({ value });
    };

    render() {
        return (
            <RadioGroup name='comic' value={this.state.value} onChange={this.handleChange}>
                <RadioButton label='The Walking Dead' value='thewalkingdead'/>
                <RadioButton label='From Hell' value='fromhell' disabled/>
                <RadioButton label='V for a Vendetta' value='vvendetta'/>
                <RadioButton label='Watchmen' value='watchmen'/>
            </RadioGroup>
        );
    }
}

export default RadioButtonDemo;