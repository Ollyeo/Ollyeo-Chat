import React from 'react'

import { Input } from 'antd';

const UserName = ({username, onChange}) => {
    return (
        <Input placeholder="Name" defaultvalue="Anonymous" value={username} onChange={onChange}/>
    );
}

export default UserName;