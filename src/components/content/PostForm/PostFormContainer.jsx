// import React from 'react';
import {addPostActionCreator, updateNewPostText} from '/Users/elizavetanadieieva/my-app/src/redux/contentReducer.js';
import PostForm from './PostForm.jsx';
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
	return {
		newPostText: state.contentPage.newPostText,
		posts: state.contentPage.posts
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addNewPost: () => {
			dispatch(addPostActionCreator());
		},
		updateNewPostText: (text) => {
			let action = updateNewPostText(text);
			dispatch(action);
		}
	}
}


const PostFormContainer = connect(mapStateToProps, mapDispatchToProps)(PostForm);

export default PostFormContainer;