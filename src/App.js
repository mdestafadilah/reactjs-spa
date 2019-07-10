import React, { Component } from 'react';

/* IMPORT KOMPONEN DISINI */
import Home from './Home';
import Welcome from './Welcome';
import Navigation from './Navigation';


class App extends Component {

  constructor(){
    super();
    this.state = {
      user: 'desta'
    }
  }


  render(){
    return(
      <div>
        <Navigation user={this.state.user} />
        { this.state.user && <Welcome user={this.state.user} /> }
        <Home user={this.state.user} />
      </div>
    );
  }
}

export default App;
