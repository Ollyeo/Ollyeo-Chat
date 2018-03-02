import React, { Component }  from 'react';
import User from '../User/User';

class UserList extends Component{
    
    constructor(props){
        super(props);
    }
    
    render() {
        const { users } = this.props;
        
        const userlist = users.map(
            ({name}) => (
                <User name={name}/>
            )
        );
        
        return (
            <div className="span3">
              <ul className="collection with-header well localusers">
                <li className="collection-header"><h4>Local Users</h4></li>
                    {userlist}
              </ul>
            </div>
        );
    };
}

export default UserList;