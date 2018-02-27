import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { UserList } from '../../components';

class UserContainer extends Component {
    
    constructor(props){
        super();
    }
    
    render() {
        const { users } = this.props;
        
        return (
            <UserList users={users}/>
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