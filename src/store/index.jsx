import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import ReduxPromise from 'redux-promise';
import myReducer from './reducers';
import thunk from 'redux-thunk';

const middleware = [logger, ReduxPromise, thunk];

// creating a store for the redux structure
const store = createStore(
    myReducer,
    applyMiddleware(...middleware)
);

export default store;