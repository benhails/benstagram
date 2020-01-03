import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { ToastSuccess, ToastError } from './Toast'

const LoginForm = ({ toggleForm, hideAndResetModal, handleLogin }) => {
    
    const [formContent, setFormContent] = useState({
        username: "",
        password: ""
    }) // holds the form input as an object

    const {username, password} = formContent
        
    const handleInput = e => {
        const value = e.target.value
        setFormContent({
            ...formContent,
            [e.target.name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios({
            method: 'POST',
            url: 'https://insta.nextacademy.com/api/v1/login',
            data: {
                username: username, // can replace with username, for shorthand
                password: password
            }
        })
        .then(({
            data: { 
                auth_token,
                user: {
                    username
                } 
            }
        }) => {
            localStorage.setItem('jwt', auth_token)
            localStorage.setItem('username', username)
            ToastSuccess(`Welcome back ${username}! You've logged in successfully!`)
            handleLogin()
        })
        .catch(({response}) => {
            console.error(response) // only one error message for login
            ToastError("Your login failed - please check your username and password then try again!")
        })

        hideAndResetModal()
        console.log(formContent)
    }

    const buttonDisabled = () => username === "" || password === ""

    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    placeholder="Enter username"
                    onChange={handleInput} 
                    name="username" 
                    value={username} />
                <Form.Text className="text-muted">
                    {/* We'll never share your email with anyone else. */}
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
                Login
            </Button>
                <p 
                    margin-top="20px">New member? <a onClick={toggleForm} href="/">Sign up here</a>
                </p>
        </Form>
    )
}

export default LoginForm
 

