import React from 'react';
import './app.css';
import Header from './components/header/Header.jsx';
import Profile from './components/profile/Profile.jsx';
import Nav from './components/nav/Nav.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Redirect} from 'react-router-dom';
import Content from './components/content/Content.jsx';
import DialogsContainer from './components/dialogs/DialogsContainer.jsx';
import Sidebar from './components/sidebar/Sidebar.jsx';
import Footer from './components/footer/Footer.jsx';
import UsersContainer from './components/users/UsersContainer.jsx';
import UsersProfileContainer from './components/usersProfile/UsersProfileContainer.jsx';

function App(props) {
  return (
    <div className='container-wrapper'>
      <Header/>
      <Profile/>
      <Nav/>
      <div className='app-wrapper-content'>
      	<Route path='/content' render={ () => <Content />} />
      	<Route path='/dialogs' render={ () => <DialogsContainer />} />
        <Route path='/users' render={ () => <UsersContainer /> } />
        <Route path='/usersProfile/:userId' render={ () => <UsersProfileContainer />} />
        <Redirect from='/' to='/content'/>
      </div>
      <Sidebar store={props.store} />
      <Footer />
    </div>
  );
}

export default App;
