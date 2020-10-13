import React from 'react';
import classes from './content.module.css';
import PostFormContainer from './PostForm/PostFormContainer.jsx';

const Content = () => {
	return(
		<div className={classes.content__block}>
			<PostFormContainer/>
		</div>
	)
}
export default Content;