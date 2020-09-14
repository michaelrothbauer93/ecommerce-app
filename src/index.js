import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

//Init redux in application
//Redux entrypoint
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';

// state persistance
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';
import App from './App';


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);

