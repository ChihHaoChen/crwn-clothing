import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

// middelwares are the array of aruguments for the function of applyMiddleware
// if we have more middleware in the future, 
// we can append it to the array.
const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;