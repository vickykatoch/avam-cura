import React, { PropTypes } from 'react';
import { AppBar } from 'react-toolbox/lib/app_bar';
import theme from './appbar.scss';

const ApplicationBar = ({children}) => (
    <AppBar className="appBar">
            {children}
        </AppBar>
);

ApplicationBar.propTypes = {
  children: PropTypes.node
};

export default ApplicationBar;