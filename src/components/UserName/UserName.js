import React from 'react'

const UserName = ({username, onChange}) => {
    return (
        <input value={username} onChange={onChange}/>
    );
}

export default UserName;