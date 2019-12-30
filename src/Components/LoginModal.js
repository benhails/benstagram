import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
// import Button from 'react-bootstrap/Button'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'


function MyModal({show, hideModal}) {

    // console.log(`${show}, ${onHide}`)
    const [isLoginForm, setIsLoginForm] = useState(true); // controls the type of form shown to the user    
    // console.log(isLoginForm)

    const toggleForm = (e) => {
        e.preventDefault() // prevents the href from being called (href is required to prevent errors)
        setIsLoginForm(!isLoginForm)
        // console.log("toggleForm just ran")
    }

    const hideAndSetModal = () => {
        setIsLoginForm(true)     // I would much rather that this just returned to the default but it can't at present because the modal is always active, it's just a case of whether it can be seen or not. As such the default will only be applied once. Need Liren's help to try and move 
        hideModal()
    }

    return (
      <Modal
        show={show} 
        onHide={hideAndSetModal}
        // {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {isLoginForm ? "Login" : "Sign Up"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {
                isLoginForm ? 
                <LoginForm toggleForm={toggleForm} hideModal={hideModal}/> : 
                <SignupForm toggleForm={toggleForm} hideModal={hideModal}/>
            }
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    );
  }
  
export default MyModal;