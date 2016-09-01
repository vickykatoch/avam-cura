import { BUTTON } from '../ComponentIdentifiers';
import { themr } from 'react-css-themr';
import { buttonFactory } from './Button';
import { iconButtonFactory } from './IconButton';
import FontIcon from '../fonticon/FontIcon';
import themedRippleFactory from '../ripple';
import theme from './theme.scss';



const Button = buttonFactory(themedRippleFactory({ centered: false }), FontIcon);
const IconButton = iconButtonFactory(themedRippleFactory({centered: true}), FontIcon);
const ThemedButton = themr(BUTTON, theme)(Button);
const ThemedIconButton = themr(BUTTON, theme)(IconButton);

export default ThemedButton;
export { ThemedButton as Button };
export { ThemedIconButton as IconButton };