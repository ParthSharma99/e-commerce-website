import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';

import {Provider, connect} from 'react-redux';
import {createStore,combineReducers, applyMiddleware} from 'redux';
import {searchItems, requestItems, requestItemById, cartItems } from './reducers';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';


const logger = createLogger() 
const rootReducer = combineReducers({searchItems, requestItems, requestItemById, cartItems});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,  
  document.getElementById('root')
);

