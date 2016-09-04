import React, {Component} from 'react';
import {TimePicker } from '../common/components/timepicker/index';

let time = new Date();
time.setHours(17);
time.setMinutes(28);

class TimePickerDemo extends Component {
   state = {time};

  handleChange = (time) => {
  	this.setState({time});
  };

  render () {
  	return <TimePicker label='Finishing time' onChange={this.handleChange} value={this.state.time} />;
  }
}

export default TimePickerDemo;