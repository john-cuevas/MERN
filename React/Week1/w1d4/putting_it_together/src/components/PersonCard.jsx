// import dependencies

import React, { Component } from 'react'

// initiate the class

class PersonCard extends Component {
    constructor(props){
        super(props);
        // this.firstName = firstName
        // this.lastName = lastName
        // this.hairColor = hairColor
        this.state = {
            age: this.props.age
        };
    }
    addBirthday = () =>{
        this.setState({age: this.state.age+=1}) 
    }
    render() {
        const {firstName, lastName, age, hairColor} = this.props
        return (
            <div>
                <h1>{lastName}, {firstName}</h1> 
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick = {this.addBirthday}>Birthday Button for {firstName} {lastName}</button>
            </div>
        )
    }

}

export default PersonCard