import React from 'react';
import classes from './users_profile.module.css';

const UsersProfile = (props) => {
	if(!props.profile){
		return 	<div className="spinner-border text-warning" role="status">
							<span className="sr-only">Loading...</span>
						</div>
	}else {
		return(
			<div className={classes.profile_wrapper}>
				<div className={classes.photo_block}>
					<img src={props.profile.photoUrl}/>
				</div>
				<div className={classes.info_block}>
					<span>{props.profile.name}</span><br/>
					<span>{props.profile.location.city} {props.profile.location.country}</span><br/>
					<span>{props.profile.status}</span>
				</div>
				<div className={classes.text}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
					Nam ornare dignissim enim eu cursus. Nulla justo massa, 
					blandit id enim quis, consectetur volutpat quam. Donec ipsum arcu, 
					pulvinar ultricies risus ac, posuere molestie enim. Donec sed lacus
					id tortor euismod placerat. Sed venenatis, nisi et dictum suscipit,
					purus dolor scelerisque enim, nec luctus nibh nunc sollicitudin quam.
					Aliquam erat volutpat. Donec dignissim sapien ut arcu vulputate,
					et semper ligula lacinia. Proin at dictum mi. Nunc nisl mauris, 
					aliquam et dolor imperdiet, tempor tincidunt est. Ut sodales ut nunc ut tincidunt.
				</div>
			</div>
		)
	}
}
export default UsersProfile;