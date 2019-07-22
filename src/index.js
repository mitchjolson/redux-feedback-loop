import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Survey reducer stores the info from the forms in the redux store.
// Action types are set up for each of the forms, so that the data can be easily kept in one object in the redux store.
const surveyReducer = (state = {}, action) => {
    console.log('in survey reducer, payload is: ', action.payload)
    if(action.type === 'FEEL') {
        return action.payload;
    }
    if(action.type === 'UNDERSTAND') {
        return {...state, understand: action.payload.understand};
    }
    if(action.type === 'SUPPORT') {
        return {...state, support: action.payload.support};
    }
    if(action.type === 'COMMENT') {
        return {...state, comment: action.payload.comment};
    }
    if(action.type === 'RESET') {
        return action.payload;
    }
    return state;
} // end surveyReducer

// create redux store
const storeInstance = createStore(
    combineReducers({
        surveyReducer
    }),
    applyMiddleware(logger)
); // end object


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

registerServiceWorker();