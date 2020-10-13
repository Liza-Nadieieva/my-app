import React from 'react';
import classes from './profile.module.css';
import Nav from 'react-bootstrap/Nav';


const Profile = () => { 
	return(
		<div className={classes.profile}>
		 	<div className={classes.profile_content__block}>
				<div className={classes.background_pic}>
				</div>
				<div className={classes.profile_ava__block}>
					<div className={classes.profile_pic}>
						<Nav.Link className={classes.active}>Liza Nadieieva</Nav.Link>
						<span className='text-center'>Kyiv, Ukraine</span>
					</div>
				</div>
				<div className={classes.profile_nav__block}>
					<Nav.Link href='#home' className={classes.active}>
					 About
					</Nav.Link>
					<Nav.Link href='#home' className={classes.active}>
					 Friends
					</Nav.Link>
				</div>
				<div className={classes.profile_nav__block_second}>
					<Nav.Link href='#home' className={classes.active}>
					 Photo
					</Nav.Link>
					<Nav.Link href='#home' className={classes.active}>
					 Videos
					</Nav.Link>
				</div>
				
			</div>
		</div>
	)
}

export default Profile;
