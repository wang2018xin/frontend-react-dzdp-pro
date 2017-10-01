import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {hashHistory} from 'react-router';
import configureStore from './store/configureStore';
import RouteMap from './router/routeMap';

// 创建Redux的store对象
const store = configureStore();

render(
    <Provider store={store}>
        <RouteMap history={hashHistory} />
    </Provider>,
    document.getElementById('root')
);


