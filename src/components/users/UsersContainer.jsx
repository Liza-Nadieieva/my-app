import {follow, unfollow, setUsers, setCurrentPage, setTotalCount, toggleIsLoading, getUsersThunkCreator} from '/Users/elizavetanadieieva/my-app/src/redux/usersReducer.js';
import {connect} from 'react-redux';
import UsersApiComponent from './UsersApiComponent.jsx';


const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		total_count: state.usersPage.total_count,
		currentPage: state.usersPage.currentPage,
		isLoading: state.usersPage.isLoading
	}
}
const UsersContainer = connect(mapStateToProps, 
	{follow,unfollow,setCurrentPage, getUsersThunkCreator})
	(UsersApiComponent);
export default UsersContainer;