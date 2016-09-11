import React, {Component, PropTypes} from 'react';
import Header from './Header';

const Layout = (props) =>{
    return (
        <div >
            <Header {...props}/>
            {props.children}            
        </div>
    );
};

Layout.propTypes = {
    theme : PropTypes.object.isRequired,
    header : PropTypes.node,     
    children : PropTypes.node
}

export default Layout;

