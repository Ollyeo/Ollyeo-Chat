import React, { Component } from 'react';
import {
  Header,
} from './components'
import { 
  ChatContainer,
  UserContainer,
} from './containers';

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
      return (
        <div>
          <Header/>
          <UserContainer/>
          <ChatContainer/>
        </div>
      );
    }
}

export default App;
