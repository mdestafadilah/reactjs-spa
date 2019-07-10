import React, { Component } from 'react';

/* IMPORT KOMPONEN DISINI */
import Home from './Home';
import Welcome from './Welcome';


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
        { this.state.user && <Welcome user={this.state.user} /> }
        <Home user={this.state.user} />
      </div>
    );
  }
}

export default App;
