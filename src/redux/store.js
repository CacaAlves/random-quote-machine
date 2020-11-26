import {createStore, combineReducers } from 'redux';
import quoteIndexReducer from './reducers/quoteIndexReducer';

const rootReducer = combineReducers({
    quoteIndex: quoteIndexReducer
});

const store = createStore(rootReducer);

export default store;