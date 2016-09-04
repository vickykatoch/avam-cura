import React, {Component} from 'react';
import {Button} from '../common/components/button/index';
import Tooltip from '../common/components/tooltip/index';
import {Link } from '../common/components/link/index';
import {Input} from '../common/components/input/index';

const TooltipButton = Tooltip(Button);
const TooltipInput = Tooltip(Input);
const TooltipLink = Tooltip(Link);

const TooltipDemo = () => (
  <div>
    <TooltipButton label='Bookmark' icon='bookmark' raised primary tooltip='Bookmark Tooltip' tooltipDelay={1000} />
    <TooltipButton icon='add' floating accent tooltip='Floating Tooltip' />
    <TooltipLink count={42} href="#" label="The answer is" icon='speaker_notes' tooltip='Question - universe?'/>
    <TooltipInput tooltip='lorem ipsum...' />
  </div>
);

export default TooltipDemo;