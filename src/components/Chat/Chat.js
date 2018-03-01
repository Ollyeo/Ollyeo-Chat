import React, { Component } from 'react';

class Chat extends Component {
    render() {
        const { name, message } = this.props;
        
        return (
            <div className="message">
                <strong>{name} :</strong> 
                <span>{message}</span>        
            </div>    
        )
    }
}

export default Chat;