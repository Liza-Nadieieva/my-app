import React from 'react';
import * as axios from 'axios';
import {connect} from 'react-redux';
import {withRouter} from "react-router";
import {setUsersProfile} from '/Users/elizavetanadieieva/my-app/src/redux/UsersProfileReducer.js';
import UsersProfile from './UsersProfile.jsx';
import {getProfileUsers} from '/Users/elizavetanadieieva/my-app/src/api/api.js';

class UsersProfileContainer extends React.Component {
	componentDidMount(){
		let userId = this.props.match.params.userId;
		getProfileUsers(userId).then(response => {
		    this.props.setUsersProfile(response.data.user)});
		}
 	render(){
	 	return <UsersProfile {...this.props} profile={this.props.profile}/>
	}
}
let mapStateToProps = (state) => ({
	profile: state.usersProfile.profile
})
let WithUrlDataContainer = withRouter(UsersProfileContainer);

	
export default connect( mapStateToProps, {setUsersProfile})(WithUrlDataContainer);