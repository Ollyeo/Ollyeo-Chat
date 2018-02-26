import React, { Component } from 'react';
import { UserList } from '../../components';

class UserContainer extends Component {
    
    constructor(props){
        super();
        
        this.state = {
            username: '',
            users: [],
        }
    }
    
    render() {
        const { users } = this.props;
        
        return (
            <UserList users={users}/>
        )
    }
}

export default UserContainer;