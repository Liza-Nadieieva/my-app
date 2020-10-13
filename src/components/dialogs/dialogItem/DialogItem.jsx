import React from 'react';
import classes from './dialogItem.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
	let path = "/dialogs/" + props.id;
	return(
		<div className={classes.dialog_item}>
			<div></div>
			<NavLink to={path} activeClassName={classes.active}> 
				{props.name}
			</NavLink>
		</div>
	)
}
export default DialogItem;
