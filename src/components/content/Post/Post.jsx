import React from 'react';
import classes from './post.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Post = (props) => {
	return (
		<div className={classes.post_block}>
		 	<div className={classes.post_text__block}>
		 		<img src='./ava.jpg' alt=''/>
		 		<span>Liza Nadieieva</span>	
				<div>{props.message}</div>
			</div>
		 	<hr /> 
			<div className={classes.post_like}>
				<i className="far fa-heart mr-2"></i>
				{props.likescount}
			</div>
		</div>
	)
}

export default Post;