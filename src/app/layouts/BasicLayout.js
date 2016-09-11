import React, {Component, PropTypes} from 'react';
import {AppBar} from 'avam-material/lib/appbar/index';
import {IconButton} from 'avam-material/lib/button/index';
import { Layout, NavDrawer, Panel, Sidebar } from 'avam-material/lib/layout/index';


class BasicLayout extends Component {
    constructor(props){
        super(props);
        this.state = {
            leftBarVisible : false
        }
        this.toggleLeftBar = this.toggleLeftBar.bind(this);
    }

    toggleLeftBar(){
        this.setState({ leftBarVisible : !this.state.leftBarVisible });
    }

    render() {
        //debugger;
        let leftBarButton;
        if(!this.state.leftBarVisible)
            leftBarButton= <IconButton icon='menu' inverse={ true } onClick={ this.toggleLeftBar }/> 
        else
            leftBarButton = <IconButton icon='close' inverse={ true } onClick={ this.toggleLeftBar } />;
        return (
            
            <Layout>
                <NavDrawer 
                    active={this.state.leftBarVisible}
                    onOverlayClick={ this.toggleLeftBar }>
                </NavDrawer>
                <Panel>
                    <AppBar flat fixed>
                         {leftBarButton}               
                        
                    </AppBar>
                    <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem', marginTop:'40px' }}>
                        <h1>Main Content</h1>
                        <p>Main content goes here.</p>                        
                    </div>
                </Panel>

            </Layout>
        );
    }
}

BasicLayout.contextTypes = {
    theme: PropTypes.object
}
BasicLayout.propTypes = {

};

export default BasicLayout;