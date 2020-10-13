import React from 'react';
import classes from './user_item.module.css';
import ava_user from './user-avatar.png';
import {NavLink} from 'react-router-dom';

const UserItem = (props) => {
	return(
		<div className={classes.item_block}>
			<div className={classes.item_profile}>
				<div className={classes.img_border}>
					<NavLink to={'/usersProfile/' + props.id}>
						<img src={props.img!=null ? props.img : ava_user} alt='#'/>
					</NavLink>
				</div>
				<div className={classes.item_info}>
				{props.name}
					<div>
						{props.location.city + ' ' + props.location.country}
					</div>
				{props.status}
				</div>
				<div>
				{props.bool_follow 
					? <button className="btn btn-outline-secondary ml-2" onClick={() => {props.unfollow(props.id) } }>Unfollow</button> 
					: <button className="btn btn-outline-secondary ml-2" onClick={() => {props.follow(props.id) } }>Follow</button>
				}
				</div>
			</div>
		</div>
	)
}
export default UserItem;
