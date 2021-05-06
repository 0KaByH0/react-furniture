import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import login from './reducers/loginReducer';
import products from './reducers/productsReducer';

const rootReducer = combineReducers({ login, products });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
