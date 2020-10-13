const ADD_POST = "add-post";
const UPDATE_NEW_POST = 'update-new-post';

let initial_state = {
	posts: [
		{message :"I'm learning react!" , likescount: 11 },
		{message : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta necessitatibus saepe maxime omnis consequuntur similique numquam harum rem reiciendis ad, quam deleniti vero vel officia nam aut, accusantium, quae tempore!"
		, likescount: 123},
		{message :"Hi, It's my first post.", likescount: 0}
	],
	newPostText: ''
}

const contentReducer = (state = initial_state, action) => {
	switch(action.type){
		case ADD_POST: 
			let newPost = {
				id:5,
				message: state.newPostText,
				likescount:0
			};
		return {
			...state,
			posts: [newPost, ...state.posts],
			newPostText: ''
		};
	  case UPDATE_NEW_POST: 
	  	return {
	  		...state,
	  		newPostText: action.newText
	  	};
		default: return state;
	}	
}
export const addPostActionCreator = () => ({ type: ADD_POST  }); // return object 
export const updateNewPostText = (text) => (
	{ type: UPDATE_NEW_POST, newText: text });  


export default contentReducer;