import React from 'react';
import AsyncComponent from '../common/utils/AsyncComponent';
import CompLoadScheduler from '../common/utils/AsyncCompLoader';
import {ProgressBar} from '../common/components/progressbar/index';

const compLoader = (callback)=>{
    require.ensure([], (require)=>{
        let comp = require('./LineChart');
        callback(comp);
    });
}
const renderPlaceholder = () =>
    <ProgressBar type='circular' mode='indeterminate' multicolor/>

CompLoadScheduler(compLoader);

export default (props)=>
    <AsyncComponent {...props} componentLoader={compLoader} renderPlaceHolder={renderPlaceholder}/>

