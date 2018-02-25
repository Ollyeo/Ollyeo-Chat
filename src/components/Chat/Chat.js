import React from 'react';

const Chat = ({name, message}) => {
    return (
        <div className="message">
            <strong>{this.props.user} :</strong> 
            <span>{this.props.text}</span>        
        </div>    
    )
}

export default Chat;