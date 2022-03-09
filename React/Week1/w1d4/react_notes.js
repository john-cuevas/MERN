// state
import React, { Component } from 'react';


class LightSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: "On"
        };
    }

    render() {
        return (
            <fieldset>
                <p>The light is currently {this.state.position}</p>
                <button>Flip Switch</button>
            </fieldset>
        );
    }
}

export default LightSwitch;

// this method goes inside of the LightSwitch Component
flipSwitch = () => {
    if (this.state.position === "On") {
        this.setState({ position: "Off" });
    } else {
        this.setState({ position: "On" });
    }
}


// in App.js
{/* <button onClick={ () => { this.state.position = "Off" } }>Flip Switch</button>

<button onClick={() => { this.setState({ position: "Off" }) }}>Flip Switch</button> */}
<button onClick={ this.flipSwitch }>Flip Switch</button>

