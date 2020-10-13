import React from 'react';
import classes from './header.module.css';
import Navbar from 'react-bootstrap/Navbar';
import ava from './ava.jpg';
import logo from './rabbit.png';

 const Header = () => {
 	return (
	  <Navbar expand="lg" sticky='top' className={classes.header}>
      <div className={classes.header_logo__block}>
         <img src={logo} alt='' />
      </div>
      <div className={classes.header_text__block}>
        <span className='text-uppercase text-white font-weight-bold'>profile page</span>
      </div>
      <div className={classes.header_profile__block}>
        <div>
          <img src={ava} alt=''/>
        </div>
        <div>
          <span className='text-white'>Liza Nadieieva</span><br/>
          <span>Velkommen!</span>
        </div>
      </div>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <form className={classes.header_search__block}>
          <input type="search" placeholder="Search here people or pages..." />
          <button type="button" className="btn btn-outline-secondary ml-2">Search</button>
        </form>
        <div className={classes.header_text__block}>
          <span className='text-white font-weight-bold'>Find friends</span>
        </div>
      </Navbar.Collapse>
      
  </Navbar>
  )
}








export default Header;
