import React from 'react';
import classes from './friendItem.module.css';
 

const FriendItem = (props) => {
	return(
		<div className={classes.friend_block}>
			<div>
			</div>
			<span>
				{props.name}
			</span>
		</div>
	)
}

export default FriendItem;
