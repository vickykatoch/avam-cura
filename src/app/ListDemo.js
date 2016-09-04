import React, {Component} from 'react';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from '../common/components/list/index';



class ListDemo extends Component {
    state = {
        checkbox: false
    };

    handleCheckboxChange = () => {
        this.setState({ checkbox: !this.state.checkbox });
    };

    render() {
        return (
            <List selectable ripple>
                <ListSubHeader caption='Explore characters' />
                <ListItem
                    avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
                    caption='Dr. Manhattan'
                    legend="Jonathan 'Jon' Osterman"
                    rightIcon='star'
                    />
                <ListItem
                    avatar='https://dl.dropboxusercontent.com/u/2247264/assets/o.jpg'
                    caption='Ozymandias'
                    legend='Adrian Veidt'
                    rightIcon='star'
                    />
                <ListItem
                    avatar='https://dl.dropboxusercontent.com/u/2247264/assets/r.jpg'
                    caption='Rorschach'
                    legend='Walter Joseph Kovacs'
                    rightIcon='star'
                    />
                <ListSubHeader caption='Configuration' />
                <ListCheckbox
                    caption='Notify new comics'
                    checked={this.state.checkbox}
                    legend='You will receive a notification when a new one is published'
                    onChange={this.handleCheckboxChange}
                    />
                <ListDivider />
                <ListItem caption='Contact the publisher' leftIcon='send' />
                <ListItem caption='Remove this publication' leftIcon='delete' />
            </List>
        );
    }
}

export default ListDemo;