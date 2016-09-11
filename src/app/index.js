import React, {Component, PropTypes} from 'react';
import Layout from './layouts/BasicLayout';
import styles from '../styles/app.scss';

class Application extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let theme = this.context.theme;
        return (
            <Layout theme={theme}>
                <div className={theme.contentSection}>
                    <h1>Hello React</h1>
                </div>
            </Layout>
        );
    }
}
Application.contextTypes = {
    theme : PropTypes.object
}
export default Application;