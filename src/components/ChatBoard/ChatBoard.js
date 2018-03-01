import React from 'react'
import {
    Chat
} from '../'
import { Card } from 'antd';

const ChatBoard = ({messages}) => {
    // append text
    console.log(messages);
    const chatlist = messages.map(
        ({name, message}) => (
            <Chat name={name} message={message}/>
        )
    );
    
    return (
        <Card title="Chattng" style={{ width: 300 }}>
            {chatlist}
        </Card>
    );
}

export default ChatBoard;