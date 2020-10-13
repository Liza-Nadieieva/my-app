import {combineReducers, createStore, applyMiddleware} from 'redux';
import contentReducer from './contentReducer.js';
import dialogsReducer from './dialogsReducer.js';
import sidebarReducer from './sidebarReducer.js';
import usersReducer from './usersReducer.js';
import UsersProfileReducer from './UsersProfileReducer.js';
import thunkMiddleware from 'redux-thunk';



let reducers = combineReducers({
	contentPage: contentReducer,
	dialogsPage: dialogsReducer,
	sidebarPage: sidebarReducer,
	usersPage : usersReducer,
	usersProfile: UsersProfileReducer
});

let store = createStore(reducers);
export default store;

