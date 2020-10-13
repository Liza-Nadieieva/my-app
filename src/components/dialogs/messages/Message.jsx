import React from 'react';
import classes from './message.module.css';

const Message = (props) => {
	return(
		<div className={classes.message_item}> 
		 <span>{props.message}</span>
		</div>
)
}
export default Message;