const ADD_MESSAGE = 'add-message';
const UPDATE_NEW_MESSAGE = 'update-new-message';
let initial_state = {
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
}
const dialogsReducer = (state = initial_state, action) => {
	switch(action.type){
		case ADD_MESSAGE:
			let text_new = state.newMessageText;
			return {
				...state,
				newMessageText: '',
				messages: [...state.messages, {id:6, message: text_new}]
			};
		case UPDATE_NEW_MESSAGE:
			return {
				...state,
				newMessageText: action.newMessage
			};
		default: return state;
	}
}
export default dialogsReducer;
export const sendMessageCreator = () => ({ type: ADD_MESSAGE }); // return object
export const updateNewNessage = (text) => (
	{ type:UPDATE_NEW_MESSAGE, newMessage: text });