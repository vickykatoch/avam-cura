import React, {Component, PropTypes} from 'react';
import {AppBar} from 'avam-material/lib/appbar/index';
import {IconButton} from 'avam-material/lib/button/index';
import { Layout, NavDrawer, Panel, Sidebar } from 'avam-material/lib/layout/index';


const Layout = (props) =>{
    return (
        <Layout>
            
        </Layout>
    );
};

Layout.propTypes = {
    theme : PropTypes.object.isRequired,
    header : PropTypes.node,     
    children : PropTypes.node
}

export default Layout;

