import React from 'react';
import {render} from 'react-dom';
import Application from './app/index';
import 'avam-material/lib/common.scss';
import "./styles/app.scss";



render(<Application/>, document.getElementById('app'));