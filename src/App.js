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
    const ref = firebase.database().ref('user');

    ref.on('value', snapshot => {
      let FBUser = snapshot.val();
      this.setState({ user: FBUser });
    })
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


  render(){
    return(
      <div>
        <Navigation user={this.state.user} />
        { this.state.user && <Welcome user={this.state.displayName} /> }

        <Router>
          <Home path="/" user={this.state.user} />
          <Login path="/login"  />
          <Meetings path="/meetings"  />
          <Register path="/register" registerUser={this.registerUser} />

        </Router>
      </div>
    );
  }
}

export default App;
