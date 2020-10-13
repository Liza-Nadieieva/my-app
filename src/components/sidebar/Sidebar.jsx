import React from 'react';
import classes from './sidebar.module.css';
import FriendItem from './friendItem/FriendItem.jsx';

const Sidebar = (props) => {
	let state = props.store.getState().sidebarPage;
	let friends_items = state.friends.map((f,i) => {
		return <FriendItem key={i} name={f.name} id={f.id} />
	})

	return(
		<div className={classes.sidebar_block}>
			<div>Friends</div>
			<hr/>
			{friends_items}
		</div>
	)
}
export default Sidebar;