import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider, applyMiddleware } from 'redux';
import { createStore } from 'redux';
import logger from 'logger';

const feedback = (state = {}, action) => {
    return state;
}

const storeInstance = creatStore(
    combineReducers({feedback}),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
