import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Application from './Reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(Application, composeEnhancers(applyMiddleware(thunk)));

export default store;
