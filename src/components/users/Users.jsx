import React from 'react';
import classes from './user.module.css'; 
import UserItem from './userItem/UserItem';

let Users = (props) => {
	let total_count = props.total_count.total_count;
	let pagesCount = Math.ceil(total_count / props.pageSize);
	let pages = [];
	let current = props.currentPage;
	let isLoading = props.isLoading;
	let users_item = props.users.map((u) => {
		return <UserItem key={u.id} name={u.name} id={u.id} img={u.photoUrl} status={u.status} follow={props.follow} unfollow={props.unfollow} bool_follow={u.follow} location={u.location}/>
	})

	for(let i = 1; i <= pagesCount; i++){
		if (i == 1 || i == pagesCount) {
			pages.push(i)
		} else if (i == current || i == current + 1 || i == current - 1) {
			pages.push(i)
		}
	}

	return (
		<div className={classes.container_wrapper}>
		{isLoading ? <div className="spinner-border text-warning" role="status">
										<span className="sr-only">Loading...</span>
									</div>: null}
			<div className='text-center pt-2'>
				<div className={classes.pagination}>
					{
						pages.map((p, i) => {
							return (
								<span>
									{(p - pages[i-1] > 1) ? <a>...</a> : ''} 
									<a onClick={ (e) => {props.onPageChanged(p) }} key={i} className={current === p && classes.active}>{p}</a>
								</span>
							)
						})
					}
				</div>
			</div>
			<div className={classes.user_block}>
				{users_item}
			</div>
		</div>
	)
}




export default Users;