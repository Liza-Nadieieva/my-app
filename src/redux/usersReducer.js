import {userApi} from '/Users/elizavetanadieieva/my-app/src/api/api.js';

const FOLLOW = 'follow';
const UN_FOLLOW = 'unfollow';
const SET_USERS = 'set-users'; 
const SET_CURRENT_PAGE = 'set-current-page';
const TOTAL_COUNT = 'total-count';
const TOGGLE_IS_LOADING = 'toggle-is-loading';


let initial_state = {
	users: [],
	pageSize: 8,
	total_count: 0,
	currentPage: 1,
	isLoading: false
}
const usersReducer = (state = initial_state, action) => {
	switch(action.type){
		case FOLLOW:
		return {
			...state,
			users: state.users.map((u) => { 
				if(u.id === action.userId){ 
					return  {...u, follow: true}
				}
			return u;
			})
		}
		case UN_FOLLOW:
		return {
			...state,
			users: state.users.map((u) => {
				if (u.id === action.userId ){
					return { ...u, follow: false } 
				}
			return u;
			})
		}
		case SET_USERS: {
			return { ...state, users: action.users}
		}
		case SET_CURRENT_PAGE: {
			return {...state, currentPage: action.currentPage}
		}
		case TOTAL_COUNT: {
			return {...state, total_count: action.totalCount}
		}
		case TOGGLE_IS_LOADING: {
			return {...state, isLoading: action.isLoading}
		}
		default:
			return state
	}	
}
export const follow = (userId) => ({ type: FOLLOW, userId  }); // return object 
export const unfollow = (userId) => (
	{ type: UN_FOLLOW, userId});  
export const setUsers  = (users ) => ({ type: SET_USERS, users });
 // мы запросим пользователей с сервера и закинем в state
export const setCurrentPage = (currentPage) =>({ type: SET_CURRENT_PAGE, currentPage});
export const setTotalCount = (totalCount) =>({ type: TOTAL_COUNT, totalCount: totalCount});
export const toggleIsLoading= (isLoading) =>({ type: TOGGLE_IS_LOADING, isLoading});


export const getUsersThunkCreator = (currentPage, pageSize) => {
	return (dispatch) => {
		dispatch(toggleIsLoading(true));
		userApi.getUsers(currentPage, pageSize).then(response => {
			dispatch(toggleIsLoading(false));
			dispatch(setTotalCount({total_count: response.data.total_count}));
			dispatch(setUsers(response.data.users)) ;
		});
	} 
}



export default usersReducer;