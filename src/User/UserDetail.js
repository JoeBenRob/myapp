import React, { Component } from 'react';

import UserInput from './UserInput.js';
import UserButton from './UserButton.js';

class UserDetail extends Component {

    //creating state
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            DOB: "",
            city: ""
        };
    };

    //creating a function
    click = () => {
        this.setState(
            {
                //altering state
                firstName: document.getElementById("fnameInput").value,
                lastName: document.getElementById("lnameInput").value,
                DOB: document.getElementById("dobInput").value,
                city: document.getElementById("cityInput").value
            });
    };

    render() {
        return (
            <div>
                <div>
                    <UserInput />
                    {/*passing a function to a child*/}
                    <UserButton click={() => this.click()} />
                    <p>user page works!</p>
                    <p>first name: {this.state.firstName} </p>
                    <p>last name: {this.state.lastName}</p>
                    <p>date of birth: {this.state.DOB}</p>
                    <p>city: {this.state.city}</p>

                </div>
            </div >
        );
    };
};
export default UserDetail;
