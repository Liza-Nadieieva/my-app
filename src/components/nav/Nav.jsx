import React from 'react';
import classes from './nav.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () =>{
	return(
		<div className={classes.nav}>
			<div className={classes.item}>
				<NavLink to='/content' activeClassName={classes.active}>
					News
				</NavLink>
			</div>
			<div className={classes.item}>
				<NavLink to='/dialogs' activeClassName={classes.active}>
					Messages
				</NavLink>
			</div>
			<div className={classes.item}>
				<NavLink to='/users' activeClassName={classes.active}>
					Find Friends
				</NavLink>
			</div>
			<div className={classes.item}>
				<a href="./">
					video
				</a>
			</div>
			<div className={classes.item}>
				<a href="./">
					Blah
				</a>
			</div>
			<hr />
			<div>
			about me
			</div>
		</div>
	)
	
}
export default Navbar;