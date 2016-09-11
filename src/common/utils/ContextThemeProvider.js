import {Children, Component, PropTypes} from 'react';

class ContextThemeProvider extends Component {
    constructor(props){
        super(props);
    }
    getChildContext() {
        return { theme: this.props.theme };
    }
    render() {
        return Children.only(this.props.children);
    }
}
ContextThemeProvider.childContextTypes = {
    theme: PropTypes.object.isRequired
};

ContextThemeProvider.defaultProps = {
    theme: {}
};
ContextThemeProvider.propTypes = {
    children: PropTypes.element.isRequired,
    theme: PropTypes.object.isRequired
};

export default ContextThemeProvider;