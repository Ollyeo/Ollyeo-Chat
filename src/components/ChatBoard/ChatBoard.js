import React from 'react'
import {
    Chat
} from '../'
import { Card } from 'antd';

const ChatBoard = ({messages}) => {
    const chatlist = messages.map(
        ({author, message}) => (
            <Chat name={author} message={message}/>
        )
    );
    
    return (
        <Card title="Chattng" style={{ width: 300 }}>
            {chatlist}
        </Card>
    );
}

export default ChatBoard;