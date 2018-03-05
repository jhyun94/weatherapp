import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import registerServiceWorker from './registerServiceWorker';

import rootReducer from './reducers/index';
import App from './App';

let storeWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(<Provider store={storeWithMiddleware(rootReducer)}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
