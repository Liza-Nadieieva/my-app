import contentReducer from './contentReducer.js';
import dialogsReducer from './dialogsReducer.js';
import sidebarReducer from './sidebarReducer.js';

let store = {
	_state : {
		contentPage: {
			posts: [
				{message :"I'm learning react!" , likescount: 11 },
				{message : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta necessitatibus saepe maxime omnis consequuntur similique numquam harum rem reiciendis ad, quam deleniti vero vel officia nam aut, accusantium, quae tempore!"
				, likescount: 123},
				{message :"Hi, It's my first post.", likescount: 0}
			],
			newPostText: ''
		},
		dialogsPage: {
			dialogs: [
				{id:'1', name: 'Dimych'},
				{id:'2', name: 'Viktor'},
				{id:'3', name: 'Valera'},
				{id:'4', name: 'Polina'},
				{id:'5', name: 'Dasha'}
			],
			messages: [
			{id:'1', message: 'hi'},
			{id:'2', message: 'Hello'},
			{id:'3', message: 'yo'},
			{id:'4', message: 'react!'},
			],
			newMessageText:''
		},
		sidebarPage:{
			friends: [
				{id:'1', name: 'Yehor'},
				{id:'2', name: 'Stas'},
				{id:'3', name: 'Anya'},
				{id:'4', name: 'Sasha'},
				{id:'5', name: 'Dasha'},
				{id:'6', name: 'Nina'}
			]
		}

	},
	_callSubscriber(){
		console.log('state changed') //  эта ф-ция заменяется на rerenderEntireTree в index.js
	},
	subscribe(observer){
		this._callSubscriber = observer;
	},
	getState(){
		return this._state;
	},
	dispatch(action){
		this._state.contentPage = contentReducer(this._state.contentPage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);
	 	this._callSubscriber(this._state);
	}
}



window.store = store;

export default store;

