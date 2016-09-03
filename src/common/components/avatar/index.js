import { AVATAR } from '../ComponentIdentifiers';
import { themr } from 'react-css-themr';
import { avatarFactory } from './Avatar';
import FontIcon from '../fonticon/FontIcon';
import theme from './theme.scss';

const Avatar = avatarFactory(FontIcon);
const ThemedAvatar = themr(AVATAR, theme)(Avatar);

export default ThemedAvatar;
export { ThemedAvatar as Avatar };