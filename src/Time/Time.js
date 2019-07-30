import React, { Component } from 'react';

class Time extends Component {

    constructor() {
        super();
        // Initialising the state
        this.state = {};
    }

    click = () => this.setState(
        { date: Date() }
    );

    render() {
        return (
            <div>
                <button onClick={this.click}>
                    Date:
            </button>
                <div>
                    {this.state.date}
                </div>
            </div >
        )
    }
}

export default Time;