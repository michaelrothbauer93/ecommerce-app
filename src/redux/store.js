import { createStore, applyMiddleware } from 'redux';

// state persistance
import { persistStore } from 'redux-persist';

// middlewares
import logger from 'redux-logger';

import rootReducer from './root-reducer';

// ES6 syntax to use spread operator to provide applyMiddleware
const middlewares = [logger];

// Insted of spread operator could just pass middlware itself
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);