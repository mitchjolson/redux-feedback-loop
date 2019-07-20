import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const testReducer = () => {
    console.log('in test reducer');
    return '';
}

const surveyReducer = (state = {}, action) => {
    console.log('in survey reducer, payload is: ', action.payload)
    if(action.type === 'FEEL') {
        return action.payload;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        testReducer,
        surveyReducer
    }),
    applyMiddleware(logger)
);


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

registerServiceWorker();