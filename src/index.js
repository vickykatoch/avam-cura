import React from 'react';
import {render} from 'react-dom';
import Application from './app/index';
import 'avam-material/lib/common.scss';
import ThemeProvider from './common/utils/ContextThemeProvider.js';
import styles from './styles/app.scss';

const content = (
  <ThemeProvider theme={styles}>
    <Application />
  </ThemeProvider>
);


render(content, document.getElementById('app'));