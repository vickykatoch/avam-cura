import React, {Component, PropTypes} from 'react';
import styles from './basiclayout.scss';
import Avatar from 'avam-material/lib/avatar';

class UserInfo extends Component {
    render() {
        return (
            <div className={styles.userInfo}>
                <Avatar title="Javier" image="https://placeimg.com/80/80/animals" style={{height: '70px', width:'70px'}}/>
                <h4 style={{marginTop : '15px'}}>Balwinder Katoch</h4>
            </div>
        );
    }
}

UserInfo.propTypes = {

};

export default UserInfo;