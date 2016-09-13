import React, {Component, PropTypes} from 'react';
import {AppBar} from 'avam-material/lib/appbar/index';
import {IconButton} from 'avam-material/lib/button/index';
import { Layout, NavDrawer, Panel, Sidebar } from 'avam-material/lib/layout/index';
import NavigationBar from './NavigationBar';
import Header from './Header';


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
        let leftBarButton = (!this.state.leftBarVisible) ? 
            <IconButton icon='menu' inverse={ true } onClick={ this.toggleLeftBar }/> : 
            <IconButton icon='close' inverse={ true } onClick={ this.toggleLeftBar } />;
        const theme = this.context.theme;
        return (            
            <Layout>
                <NavigationBar 
                    isVisible={this.state.leftBarVisible}
                    overlayClick={ this.toggleLeftBar }>
                </NavigationBar>
                <Panel>
                    <Header isSideMenuVisible={this.state.leftBarVisible} toggleLeftBar ={ this.toggleLeftBar }/>
                    <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem', marginTop:'40px', height : "calc(100vh - 65px)" }}>
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