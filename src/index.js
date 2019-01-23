import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { provider } from 'react-redux';
import { createStore } from 'redux';

import chat from './reducers';

const store = createStore(chat);

ReactDOM.render(
    <provider store={store}>
    <App />
    </provider>, document.getElementById('root'));
serviceWorker.unregister();
