import { themr } from 'react-css-themr';
import { SLIDER } from '../ComponentIdentifiers';
import { ProgressBar } from '../progressbar';
import { Input} from '../input';
import { sliderFactory } from './Slider';
import theme from './theme.scss';

const ThemedSlider = themr(SLIDER, theme)(sliderFactory(ProgressBar, Input));
export default ThemedSlider;
export { ThemedSlider as Slider };
