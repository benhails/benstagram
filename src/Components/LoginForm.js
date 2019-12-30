// import React, {useState, useEffect} from 'react'
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const LoginForm = ({ toggleForm, hideModal }) => {
    
    const [formContent, setFormContent] = useState({
        username: "",
        password: ""
    }) // holds the form input as an object

    // const [formContent, setFormContent] = useState() // this is an attempt to prevent the login details being removed on toggle but it doesn't work as code below is being executed before the default useState value is set
    //     useEffect(() => {
    //         setFormContent({
    //             username: "",
    //             password: ""
    //         })
    //         }, [])
        
    const handleInput = e => {
        const value = e.target.value
        setFormContent({
            ...formContent,
            [e.target.name]: value
        })
    }

    //   if (!e.target.value.includes('!')) {
    //     setFormContent({username: e.target.value})
    //     console.log(formContent)
    //   }

    const handleSubmit = (e) => {
        e.preventDefault()
        hideModal()
        console.log(formContent)
    }

    const {username, password} = formContent

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


