import React, { useState } from 'react'

const Form = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)

    const [firstNameError, setFirstNameError] = useState(true)
    const [lastNameError, setLastNameError] = useState(true)
    const [emailError, setEmailError] = useState(true)
    const [passwordError, setPasswordError] = useState(true)
    const [confirmPasswordError, setConfirmPasswordError] = useState(true)


    const handleSubmit = (e) => {
        e.preventDefault(); // prevent refresh
        if(!firstNameError && !lastNameError && !emailError && !passwordError && !confirmPasswordError){
            const newUser = {firstName, lastName, email, password} // create user
            console.log(newUser)
            setHasBeenSubmitted(true)
        }
        else{
            alert("error")
        }
    }


    const handleFirstName = (e) => {
        setFirstName(e.target.value)
        if (e.target.value.length < 2 && e.target.value.length > 0) {
            setFirstNameError("First Name must be at least 2 characters")
        }
        else {
            setFirstNameError("")
        }

    }
    const handleLastName = (e) => {
        setLastName(e.target.value)
        if (e.target.value.length < 2 && e.target.value.length > 0) {
            setLastNameError("Last Name must be at least 2 characters")
        }
        else {
            setLastNameError("")
        }

    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
        if (e.target.value.length < 2 && e.target.value.length > 0) {
            setEmailError("Email must be at least 2 characters")
        }
        else {
            setEmailError("")
        }

    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 8 && e.target.value.length > 0) {
            setPasswordError("Password must be at least 8 characters")
        }
        else {
            setPasswordError("")
        }

    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
        if (e.target.value !== password) {
            setConfirmPasswordError("Passwords must match")
        }
        else {
            setConfirmPasswordError("")
        }

    }

    return (
        <div>

            {
                hasBeenSubmitted?
                <h1>Thank you for submitting the form</h1>:
                <h1>Please fill in the form</h1>
            }

            <form onSubmit={handleSubmit}>
                <div>
                    <label> First Name:</label>
                    <input type="text" name="firstName" onChange={handleFirstName} value={firstName} />
                    {
                        firstNameError ?
                            <p>{firstNameError}</p> :
                            ""
                }
                </div>
                <div>
                    <label> Last Name:</label>
                    <input type="text" name="lastName" onChange={handleLastName} value={lastName} />
                    {
                        lastNameError ?
                            <p>{lastNameError}</p> :
                            ""
                }
                </div>
                <div>
                    <label> Email:</label>
                    <input type="text" name="email" onChange={handleEmail} value={email} />
                    {
                        emailError ?
                            <p>{emailError}</p> :
                            ""
                }
                </div>
                <div>

                    <label> Password:</label>
                    <input type="password" name="password" onChange={handlePassword} value={password} />
                    {
                        passwordError ?
                            <p>{passwordError}</p> :
                            ""
                }
                </div>
                <div>

                    <label> Confirm Password:</label>
                    <input type="confirmPassword" name="confirmPassword" onChange={handleConfirmPassword} value={confirmPassword} />
                    {
                        confirmPasswordError ?
                            <p>{confirmPasswordError}</p> :
                            ""
                }
                </div>
                <button disabled = {firstNameError || lastNameError || emailError || confirmPasswordError}>Submit</button>
            </form>

            <h3>Your Form Data</h3>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>

    )
}

export default Form