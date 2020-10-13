import {sendMessageCreator, updateNewNessage} from '/Users/elizavetanadieieva/my-app/src/redux/dialogsReducer.js';
import Dialogs from './Dialogs.jsx';
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
	return {
		messages: state.dialogsPage.messages,
		dialogs: state.dialogsPage.dialogs,
		newMessageText: state.dialogsPage.newMessageText
	}
}
const mapDispatchToProps = (dispatch) =>{
	return{
		sendMessageCreator: () =>{
			dispatch(sendMessageCreator());
		},
		updateNewNessage: (text) =>{
			dispatch(updateNewNessage(text));
		}
	}

}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);



export default DialogsContainer;
