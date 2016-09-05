import React, {Component, PropTypes} from 'react';
import TopRightLayout from './TopRightLayout';

const Layout = (props) =>{
    return (
        <TopRightLayout {...props}/>
    );
};

Layout.propTypes = {
    header : PropTypes.node,     
    children : PropTypes.node
}

export default Layout;

