import React from 'react';
import {IconMenu, MenuItem, MenuDivider } from '../common/components/menu/index';


const MenuDemo = () => (
  <IconMenu icon='more_vert' position='topLeft' menuRipple>
    <MenuItem value='download' icon='get_app' caption='Download' />
    <MenuItem value='help' icon='favorite' caption='Favorite' />
    <MenuItem value='settings' icon='open_in_browser' caption='Open in app' />
    <MenuDivider />
    <MenuItem value='signout' icon='delete' caption='Delete' disabled />
  </IconMenu>
);

export default MenuDemo;