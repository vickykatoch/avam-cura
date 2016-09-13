import React, {Component, PropTypes} from 'react';
import {AppBar} from 'avam-material/lib/appbar/index';
import {IconButton} from 'avam-material/lib/button/index';
import styles from './basiclayout.scss';
import logo from '../../styles/images/logo.jpg';
import classNames from 'classnames';


class Header extends Component {
    constructor(props){
        super(props);        
    }
    
    render() {
        let {isSideMenuVisible, toggleLeftBar, ...other } = this.props;
        let menuButton = isSideMenuVisible ?             
            <IconButton icon='close' inverse={ true } onClick={ toggleLeftBar } /> :
            <IconButton icon='menu' inverse={ true } onClick={ toggleLeftBar }/> ;
        let logoClasses = classNames(styles.logoArea, styles.logo);
        let titleClasses = classNames(styles.titleArea, styles.flex);
        return (
            <AppBar flat fixed >
                {menuButton}
                <div className={styles.flex}>
                    <h3 className={styles.titleArea}>AVAM Curator</h3>
                    <img src={logo} className={logoClasses} />
                </div>
            </AppBar>    
        );
    }
}
Header.propTypes= {
    isSideMenuVisible : PropTypes.bool.isRequired,
    toggleLeftBar : PropTypes.func
};
Header.contextTypes = {
    theme: PropTypes.object
}
export default Header;