import React, {Component, PropTypes} from 'react';
import { NavDrawer, Panel } from 'avam-material/lib/layout/index';
import UserInfo from './UserInfo';
import styles from './basiclayout.scss';

class NavigationBar extends Component {
    render() {
        let {isVisible, overlayClick, ...other } = this.props;

        return (
            <NavDrawer
                active={isVisible}
                onOverlayClick={overlayClick}>
                <div className={styles.navbarContent}>
                    <UserInfo />
                </div>
            </NavDrawer>
        );
    }
}

NavigationBar.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    overlayClick: PropTypes.func
};

export default NavigationBar;