import { CHIP } from '../ComponentIdentifiers';
import { themr } from 'react-css-themr';
import { chipFactory } from './Chip';
import Avatar from '../avatar';
import theme from './theme.scss';

const Chip = chipFactory(Avatar);
const ThemedChip = themr(CHIP, theme)(Chip);

export default ThemedChip;
export { ThemedChip as Chip };