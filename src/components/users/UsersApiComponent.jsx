import React from 'react';
import * as axios from 'axios';
import Users from './Users.jsx';
import {userApi} from '/Users/elizavetanadieieva/my-app/src/api/api.js';

class UsersApiComponent extends React.Component {
	componentDidMount(){
		this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
	}
	render(){
		return(
			<Users total_count={this.props.total_count}
							pageSize={this.props.pageSize}
							currentPage={this.props.currentPage}
							onPageChanged={this.onPageChanged}
							usersItems={this.usersItems}
							users={this.props.users}
							follow={this.props.follow}
							unfollow={this.props.unfollow}
							isLoading={this.props.isLoading}
			 />
		)

	}
}


export default UsersApiComponent;