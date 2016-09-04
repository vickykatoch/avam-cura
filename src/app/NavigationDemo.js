import React, {Component} from 'react';
import Navigation from '../common/components/navigation/index';
import Link from '../common/components/link/index';

const actions = [
  { label: 'Alarm', raised: true, icon: 'access_alarm'},
  { label: 'Location', raised: true, accent: true, icon: 'room'}
];



const NavigationDemo = () => (
  <div>
    <Navigation type='horizontal' actions={actions} />
    <Navigation type='vertical'>
      <Link href='http://www.bing.com' label='Inbox' icon='inbox' />
      <Link href='http://www.google.com' active label='Profile' icon='person' />
    </Navigation>
  </div>
);


export default NavigationDemo;