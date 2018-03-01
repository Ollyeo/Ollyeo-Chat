import React, { Component } from 'react';

import {
    ChatBoard,
    ChatWrapper
} from '../../components';

class ChatContainer extends Component {
    constructor(props){
        super(props);
        console.log('ChatContainer')
        console.log(props);
    }
    
    render() {
        const { 
                messages,
                message,
                handleOnChangeMessage,
                handleOnSubmitMessage }
                = this.props;
        
        return(
            <div className="chat-container">
                <ChatBoard messages={messages}/>
                <ChatWrapper
                    message={message}
                    onChange={handleOnChangeMessage}
                    onKeyPress={handleOnSubmitMessage}
                    onSubmit={handleOnSubmitMessage}
                />
            </div>
        );
    }
}

export default ChatContainer;