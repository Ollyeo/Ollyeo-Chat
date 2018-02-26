import React from 'react';
import { Button } from 'antd';

const ChatWrapper = ({value, onChange, onKeyPress, onSubmit}) => {
    return (
        <div className="form">
            <Button type="primary">Button</Button>
            <input value={value} onChange={onChange}/>
            <div className="create-button" onClick={onSubmit}>
                Enter
            </div>
        </div>
    )
}

export default ChatWrapper;