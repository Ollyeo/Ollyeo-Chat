import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    UserName,
    UserList
} from '../../components';

class UserContainer extends Component {
    
    constructor(props){
        super();
    }
    
    render() {
        const { username, users, handlOnChangeName} = this.props;
        
        return (
            <div>
                <UserName username={username} onChange={handlOnChangeName} />
                <UserList users={users} />
            </div>
        )
    }
}

/*
UserContainer.defaultProps = {
    headerTitle: 'Default header',
    contentTitle: 'Default contentTitle',
    contentBody: 'Default contentBody'
};

MovUserContainerie.propTypes = {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.array.isRequired,
    synopsis : PropTypes.string.isRequired
}
*/

export default UserContainer;