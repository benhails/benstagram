import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { ToastSuccess, ToastError } from './Toast'


const SignupForm = ({ toggleForm, hideAndResetModal }) => {

    const [formContent, setFormContent] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const {username, email, password, confirmPassword} = formContent

    const [usernameValid, setUsernameValid] = useState(false);
    const [delay, setDelay] = useState(null);

    const handleInput = e => {
        clearTimeout(setDelay)
        const value = e.target.value
        // const { value } = e.target   // this line is the same as the one above!
        setFormContent({
            ...formContent,
            [e.target.name]: value
        })
        if (e.target.name === "username") {
            let newDelay = setTimeout(() => handleUsernameCheck(value), 300)
            setDelay(newDelay)
        } 
    }

    const handleUsernameCheck = username => {
        if (username.length >= 6) {
          axios
            .get(
              `https://insta.nextacademy.com/api/v1/users/check_name?username=${username}`
            )
            .then(response => {
              if (response.data.valid) {
                setUsernameValid(true);
                console.log(response.data.valid)
              } else {
                setUsernameValid(false);
                console.log(response.data.valid)
              }
            });
        }
      };

    const handleSubmit = (e) => {

        e.preventDefault()

        axios({
            method: 'POST',
            url: 'https://insta.nextacademy.com/api/v1/users/',
            data: {
                username: username,
                email: email,
                password: password
            }
        })
        .then(response => {
            console.log(response)
            ToastSuccess("Your signup was successful and you've been logged in!")
        })
        .catch(error => {
            console.error(error.response)
            ToastError("Your signup failed - please try again!")
        })
        
        hideAndResetModal()
        console.log(formContent)
    }

    const buttonDisabled = () => 
        username === "" || 
        email=== "" || 
        password === "" || 
        confirmPassword === "" || 
        password !== confirmPassword

    return (
        <Form>
            <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    placeholder="Enter username"
                    onChange={handleInput} 
                    name="username" 
                    value={username}
                    />                
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    onChange={handleInput}
                    name="email"
                    value={email}
                    />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password" 
                    onChange={handleInput} 
                    name="password" 
                    value={password}/>
            </Form.Group>
            <Form.Group controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control 
                    type="password"
                    placeholder="Confirm Password" 
                    onChange={handleInput} 
                    name="confirmPassword" 
                    value={confirmPassword}/>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button 
                variant="primary"
                type="submit" 
                onClick={handleSubmit}
                href="/"
                disabled={buttonDisabled()}
                >
                Sign Up
            </Button>
            <p margin-top="20px">
                Already a member? <a onClick={toggleForm} href="/">Log in here</a>
             </p>
        </Form>
    )
}

export default SignupForm


