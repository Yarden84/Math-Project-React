import { createStore, combineReducers } from 'redux';
import searchReducer from './reducers/searchReducer';
import subjectReducer from './reducers/subjectReducer';
import shoppingCartReducer from './reducers/shoppingCartReducer';


export default createStore(combineReducers({ searchReducer, subjectReducer, shoppingCartReducer }));