import React, {Component} from 'react';
import LineChart from './LineChartAsync';
import {AppBar} from '../common/components/appbar/index';
import {ProgressBar} from '../common/components/progressbar/index';


class App extends Component {

    constructor(props){
        super(props);
        this.state = { showCharts: false };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange () {
        this.setState({
            showCharts: !this.state.showCharts
        });
    }

    render() {
        
        return (
            <div>
                <AppBar {...this.props}>
                    React Application Bar
                </AppBar>
                <div >
                    <ProgressBar type='circular' mode='indeterminate' multicolor/>
                </div>

                Show charts:
                <input type="checkbox" value={this.state.showCharts} onChange={this.handleChange} />

                {
                    this.state.showCharts ? <div><LineChart/></div> : null
                }
            </div>
        );
    }
}
export default App;