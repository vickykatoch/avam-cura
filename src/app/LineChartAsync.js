import React from 'react';
import AsyncComponent from '../common/utils/AsyncComponent';
import CompLoadScheduler from '../common/utils/AsyncCompLoader';

const compLoader = (callback)=>{
    debugger;
    require.ensure([], (require)=>{
        callback(require('./LineChart'));
    });
}

CompLoadScheduler(compLoader);

export default (props)=>{
    <AsyncComponent {...props} componentLoader={compLoader}/>
}

