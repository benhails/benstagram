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

    const { username, email, password, confirmPassword } = formContent

    const [usernameValid, setUsernameValid] = useState(true);
    const [delay, setDelay] = useState(null);

    const handleInput = e => {
        clearTimeout(delay) // this clears the queued item based on the valie of 'delay'
        const { name, value } = e.target
        // const { value } = e.target   // this line is the same as the one above!
        setFormContent({
            ...formContent,
            [e.target.name]: value
        })
        if (name === "username") {
            let timer = setTimeout(() => handleUsernameCheck(value), 300) // the setTimeout function returns a queue number
            setDelay(timer)
        }
    }

    const handleUsernameCheck = username => {
        if (username.length >= 5) {
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
                console.log(response.data.message)
                ToastSuccess(response.data.message)
            })
            .catch(error => {
                console.error(error.response.data.message)
                error.response.data.message.forEach(ToastError)
            })

        hideAndResetModal()
        console.log(formContent)
    }

    const validateUsername = () => {
        if (!username.length) {
            return {
                valid: false,
                invalid: false,
                message: ''
            }
        }

        if (username.length < 5 || username.length > 20) {
            return {
                valid: false,
                invalid: true,
                message: 'Please provide a username between 5 and 20 characters.'
            }
        }
        
        if (!usernameValid) {
            return {
                valid: false,
                invalid: true,
                message: 'Username has been taken'
            }
        }

        return {
            valid: true,
            invalid: false,
            message: 'Username is valid and available'
        }
    }

    const { valid, invalid, message } = validateUsername()

    // const emailRegex = RegExp(/^\S+@\S+\.\S+$/)

    const emailRegex = RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

    const buttonDisabled = () => 
        username === "" || email === "" || password === "" || confirmPassword === "" ||   // checks that no field is blank
        !valid ||   // check that username is valid
        !emailRegex.test(email) ||   // check that email address is a valid address
        password.length < 8 || password.length > 50 ||   // check password is correct length
        password !== confirmPassword   // check confirm password equals password

    return (
        <Form>
            <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    isInvalid={invalid}
                    isValid={valid}
                    placeholder="Enter username"
                    onChange={handleInput}
                    name="username"
                    value={username}
                />
                <Form.Control.Feedback type={valid ? 'valid' : 'invalid'}>
                    {message}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={handleInput}
                    name="email"
                    value={email}
                    isInvalid={!emailRegex.test(email) && email.length !== 0}
                />
                <Form.Control.Feedback type="invalid">
                        Please enter a valid email address
                    </Form.Control.Feedback>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    isInvalid={(password.length < 8 || password.length > 50) && password.length !== 0}
                    type="password"
                    placeholder="Password"
                    onChange={handleInput}
                    name="password"
                    value={password} />
                    <Form.Control.Feedback type="invalid">
                        Password must be between 8 and 50 characters
                    </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                    isInvalid={password !== confirmPassword && confirmPassword.length !== 0}
                    type="password"
                    placeholder="Confirm Password"
                    onChange={handleInput}
                    name="confirmPassword"
                    value={confirmPassword} />
                    <Form.Control.Feedback type="invalid">
                        Passwords must be the same
                    </Form.Control.Feedback>
            </Form.Group>
            {/* <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
            </Form.Group> */}
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


