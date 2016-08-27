import React from 'react';
import AsyncComponent from '../common/utils/AsyncComponent';
import CompLoadScheduler from '../common/utils/AsyncCompLoader';

const compLoader = (callback)=>{
    require.ensure([], (require)=>{
        let comp = require('./LineChart');
        callback(comp);
    });
}
const renderPlaceholder = () =>
    <div style={{textAlign: 'center'}}>
        <CircularProgress/>
    </div>

CompLoadScheduler(compLoader);

export default (props)=>
    <AsyncComponent {...props} componentLoader={compLoader}/>

