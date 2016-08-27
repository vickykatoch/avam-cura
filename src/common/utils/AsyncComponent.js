import React, {Component, PropTypes} from 'react';

class AsyncComponent extends Component {

    constructor(props){
        super(props);
        this.state= {
            component: null
        };
    }

    componentDidMount() {
        this.props.componentLoader((componentModule)=>{
            this.setState({component : componentModule.default});
        });
    }
    renderPlaceholder() {
      return <div>Loading....</div>;
    }

    render() {
        if (this.state.component) {
            return <this.state.component/>
        }
        return (this.props.renderPlaceholder || this.renderPlaceholder)();
    }
}

AsyncComponent.propTypes = {
    componentLoader : PropTypes.func.isRequired,
    renderPlaceHolder : PropTypes.func
};

export default AsyncComponent;