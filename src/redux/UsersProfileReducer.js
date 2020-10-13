const SET_USER_PROFILE = 'set-user-profile';

let initial_state = {
	profile: null
}

const UsersProfileReducer = (state = initial_state, action) => {
	switch (action.type){
		case SET_USER_PROFILE: {
			return { ...state, profile: action.profile}
		}
		default:
			return state
	}
}

export const setUsersProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export default UsersProfileReducer;