import React from 'react';
import Root from './Router';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {reducers} from './reducers';
import { createLogger } from 'redux-logger';
import { applyMiddleware, createStore, compose } from 'redux';
import '@sass/styles.scss';

import { history } from './history';

const store = compose(
    applyMiddleware(thunk, createLogger()),
)(createStore)(reducers, {});



const rootElement = document.createElement("div");
rootElement.id = "root";
document.body.appendChild(rootElement);


ReactDOM.render(
    <Root store={store} history={history}/>, document.getElementById('root')
);
