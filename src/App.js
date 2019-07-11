import React, { Component } from 'react';
import { Router, navigate } from '@reach/router';
import firebase from './Firebase';

/* IMPORT KOMPONEN DISINI */
import Home from './Home';
import Welcome from './Welcome';
import Login from './Login';
import Meetings from './Meetings';
import Register from './Register';
import Navigation from './Navigation';


class App extends Component {

  constructor(){
    super();
    this.state = {
      user: null,
      displayName: null,
      userID: null
    }
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged(FBUser => {
      if(FBUser) {
        this.setState({
          user: FBUser,
          displayName: FBUser.displayName,
          userID: FBUser.uid
        })
      }
    });
  }

  // get global properties
  registerUser = userName => {
    // track user register
    firebase.auth().onAuthStateChanged(FBUser => {
      // update profile
      FBUser.updateProfile({
        displayName: userName
      }).then(() => {
        this.setState({
          user: FBUser,
          displayName: FBUser.displayName,
          userID: FBUser.uid
        });
        navigate('/meetings');
      })
    })
  }

  logOutUser = e => {
    e.preventDefault();
    this.setState({
      displayName: null,
      userID: null,
      user: null
    });

    firebase.auth().signOut().then(() => {
      navigate('/login');
    });
  }

  addMeeting = meetingName => {
    const ref = firebase
      .database()
      .ref(`meetings/${this.state.user.uid}`);
    
    ref.push({meetingName: meetingName});
  }


  render(){
    return(
      <div>
        <Navigation 
            user={this.state.user} 
            logOutUser={this.logOutUser} 
        />
        { this.state.user && <Welcome  
            userName={this.state.displayName}             
            logOutUser={this.logOutUser} 
        /> }

        <Router>
          <Home path="/" user={this.state.user} />
          <Login path="/login"  />
          <Meetings path="/meetings" addMeeting={this.addMeeting} />
          <Register path="/register" registerUser={this.registerUser} />

        </Router>
      </div>
    );
  }
}

export default App;
