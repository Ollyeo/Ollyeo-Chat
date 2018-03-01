import React, { Component } from 'react';
import {
  Header,
} from './components'
import { 
  ChatContainer,
  UserContainer,
} from './containers';

import io from "socket.io-client";

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: 'Anonymous',
      users: [],
      message: '',
      messages: []
    }  

    this.socket = io('ollyeo-chat-hyunseo.c9users.io:8080');

    this.socket.on('connect', this.setSocket)
  }
  
  setSocket = (data) => {
      // userlist update를 위해 
      this.socket.emit('identify', this.state.username)
    
      // message 받음
      this.socket.on('message', (data) => {
        console.log('receive message')
        this.setState({
          messages: this.state.messages.concat([data])
        })
      });
      
      // 누군가 접속
      this.socket.on('user', (data) => {
        console.log('receive user')
        // 추가가 아니라 전체 업데이트
        this.setState({
          users: this.state.users.concat([data])
        })
      })
  }
    
  sendMessage = (ev) => {
    ev.preventDefault();
        
    const { username, message } = this.state
        
    console.log('send message:', message);
        
    this.socket.emit('message', {
      author: username,
      message: message
    });
        
    this.setState({
      message:''
    })
  };
     
  handleOnChangeName = (ev) =>{
    console.log('handleOnChangeName')
    this.setState({
      username: ev.target.value
    })
  }
  
  handleOnIdentify = (ev) => {
    console.log('handleOnSubmitMessage')
    this.setName();
    this.setState({
      username: ''
    })
  }
  
  handleOnChangeMessage = (ev) => {
    console.log('handleOnSubmitMessage')
    this.setState({
      message: ev.target.value
    })
  }
  
  handleOnSubmitMessage = (ev) => {
    console.log('handleOnSubmitMessage')
    ev.preventDefault()
    this.sendMessage();
        
    this.setState({
      message: ''
    });
  }
  
  render() {
    
    const { handleOnChangeName,
            handleOnIdentify,
            handleOnChangeMessage,
            handleOnSubmitMessage }
            = this.state;
            
    const { username, users, message, messages } = this.state;
    
      return (
        <div>
          <Header/>
          <UserContainer 
            username={username}
            users={users}
            handlOnChangeName={handleOnChangeName}/>
          <ChatContainer 
            messages={messages}
            message={message}
            handleOnChangeMessage={handleOnChangeMessage}
            handleOnSubmitMessage={handleOnSubmitMessage}/>
        </div>
      );
  }
}

export default App;
