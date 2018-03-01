import React from 'react';
import { 
    Button,
    Icon,
    Input
} from 'antd';

const ChatWrapper = ({message, onChange, onKeyPress, onSubmit}) => {
    console.log(onChange);
    return (
        <div className="form">
            <Icon type="smile" />

            <Input placeholder="content" value={message} onChange={onChange} onPressEnter={onSubmit}/>
            <Button type="primary" onClick={onSubmit}>Button</Button>
        </div>
    )
}

export default ChatWrapper;