import React from 'react';
import classes from './dialogs.module.css';
import DialogItem from './dialogItem/DialogItem.jsx';
import Message from './messages/Message.jsx';

const Dialogs = (props) => {

	let newMessageElement = React.createRef();

	let dialog_items = props.dialogs.map((d,i) => {
		return <DialogItem key={i} name={d.name} id={d.id} />
	})
	let messages_elements = props.messages.map((m,i) => {
		return <Message key={i} message={m.message}/>
	})
	let onSendMessageClick = () => {
		props.sendMessageCreator();
	}
	let onNewMessageChange = () => {
		let text_value = newMessageElement.current.value;
		props.updateNewNessage(text_value);
	}
	return (
		<div className={classes.dialogs_block}>
			<div className={classes.dialogs}>
				{dialog_items}
			</div>
			<div className={classes.messages}>
				<div className={classes.addMessage_block}>
					<textarea onChange={onNewMessageChange} ref={newMessageElement} placeholder='enter your message' value={props.newMessageText} />
					<button onClick={onSendMessageClick}> send </button>
					{messages_elements}

				</div>
			</div>
		</div>
	)
}






export default Dialogs;
