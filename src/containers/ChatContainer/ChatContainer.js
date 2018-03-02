import React, { Component } from 'react';

import {
    ChatBoard,
    ChatWrapper
} from '../../components';

class ChatContainer extends Component {
    constructor(props){
        super(props);
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
                    onSubmit={handleOnSubmitMessage}
                />
            </div>
        );
    }
}

export default ChatContainer;