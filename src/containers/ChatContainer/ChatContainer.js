import React, { Component } from 'react';
import io from "socket.io-client";

import {
    ChatBoard,
    ChatWrapper
} from '../../components';

class ChatContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            users: [],
            message: '',
            messages: []
        };

        this.socket = io('ollyeo-chat-hyunseo.c9users.io:8080');

        this.socket.on('connect', function(data){
            
            this.socket.emit('identify', this.state.username);
            
            // message 받음
            this.socket.on('message', (data) => {
              this.setState({
                messages: this.state.messages.concat([data])
              })
              
              
            });
            
            // 누군가 접속
            this.socket.on('user', (data) => {
              this.setState({
                users: this.state.users.concat([data])
              })
            });
        });
    }
    
    sendMessage = (ev) => {
        ev.preventDefault();
        
        const { username, message } = this.state
        
        console.log('Sending message:', message);
        
        this.socket.emit('message', {
            author: username,
            message: message
        });
        
        this.setState({
          message:''
        })
    };
     
    handleOnChangeName = (ev) =>{
        this.setState({
          username: ev.target.value
        })
      }
  
    handleOnIdentify = (ev) => {
        this.setName();
        this.setState({
          username: ''
        })
      }
  
    handleOnChangeMessage = (ev) => {
        this.setState({
          message: ev.target.value
        })
      }
  
    handleOnSubmitMessage = (ev) => {
        ev.preventDefault()
        this.sendMessage();
        
        this.setState({
          message: ''
        });
      }
    
    render() {
        const { messages,
                input,
                handleOnChangeMessage,
                handleOnSubmitMessage
        } = this.props;
        
        return(
            <div className="chat-container">
                <ChatBoard messages={messages}/>
                <ChatWrapper
                    value={input}
                    onChange={handleOnChangeMessage}
                    onKeyPress={handleOnSubmitMessage}
                    onSubmit={handleOnSubmitMessage}
                />
            </div>
        );
    }
}

export default ChatContainer;