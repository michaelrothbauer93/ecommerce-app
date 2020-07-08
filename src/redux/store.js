import { createStore, applyMiddleware } from 'redux';

//middlewares
import logger from 'redux-logger';

import rootReducer from './root-reducer';

//ES6 syntax to use spread operator to provide applyMiddleware
const middlewares = [logger];

//Insted of spread operator could just pass middlware itself
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;