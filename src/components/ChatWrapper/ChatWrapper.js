import React from 'react';
import { 
    Button,
    Icon
} from 'antd';

const ChatWrapper = ({message, onChange, onKeyPress, onSubmit}) => {
    return (
        <div className="form">
            <Icon type="smile" />

            <input value={message} onChange={onChange}/>
            <Button type="primary" onClick={onSubmit}>Button</Button>
        </div>
    )
}

export default ChatWrapper;