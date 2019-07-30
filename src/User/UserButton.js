import React, { Component } from 'react';

import UserDetail from './UserDetail.js';

class UserButton extends Component {

    render() {
        return (
            <button onClick={this.props.click}>Enter</button>
        );
    };
};
export default UserButton;