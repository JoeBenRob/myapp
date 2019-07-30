import React, { Component } from 'react';

import UserDetail from './UserDetail.js';

class UserInput extends Component {

    render() {
        return (
            <div>
                <input placeholder="first name" id="fnameInput" />
                <input placeholder="last name" id="lnameInput" />
                <input placeholder="Date of Birth" id="dobInput" />
                <input placeholder="City" id="cityInput" />
            </div >
        );
    };
};

export default UserInput;