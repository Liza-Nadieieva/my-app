import React from 'react';
import classes from './post_form.module.css';
import Post from './../Post/Post.jsx';

const PostForm = (props) => {
	let newPostElement = React.createRef();

	let addNewPost = () => {
		props.addNewPost();
	}

	let onAddPost = () => {
		let text_value = newPostElement.current.value;
		props.updateNewPostText(text_value);
	}

	let posts_item = props.posts.map((p, i) => {
		return <Post key={i} message={p.message} likescount={p.likescount} ></Post>
	})
	return(
		<div>
			<div className={classes.post_block}>
				<div>
					<img src="./ava.jpg" alt='' />
				</div>
				<div>
					<textarea onChange={onAddPost} ref={newPostElement} placeholder="what's new?" value={props.newPostText}/>
				</div>
				<button onClick={addNewPost} className="btn btn-outline-secondary ml-5">Add Post</button>
			</div>
			<div>
				{posts_item}
			</div>
		</div>

	)
}
export default PostForm;