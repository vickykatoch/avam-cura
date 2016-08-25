import React, {Component} from 'react';
import LineChart from './LineChartAsync';

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

                <h1>Hello React</h1>

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