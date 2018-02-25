import React, { Component } from 'react';
import {
  Header,
} from './components'
import { 
  ChatContainer,
  UserContainer,
} from './containers';

class App extends Component {
   render() {
      const { users, text, messages } = this.state;
      
      const { handleOnChangeName,
              handleOnIdentify,
              handleOnChangeMessage,
              handleOnSubmitMessage } = this;
      
      return (
        <div>
          <Header/>
          <UserContainer
            users={users}
          />
          <ChatContainer
            messages={messages}
            input={text}
            handleOnChangeMessage={handleOnChangeMessage}
            handleOnSubmitMessage={handleOnSubmitMessage}/>
        </div>
      );
    }
}

export default App;
