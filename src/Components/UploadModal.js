import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import ImageUploadForm from './ImageUploadForm'
import { AddPhotoButton } from './Styled'


function UploadModal() {
  const [modalShow, setModalShow] = useState(false)

  const showModal = () => {
    setModalShow(true)
  }

  const hideModal = () => {
    setModalShow(false)
  }

  return (
    <>
      <AddPhotoButton className="btn btn-primary" onClick={showModal}>Share a new photo</AddPhotoButton>
      <Modal
        show={modalShow}
        onHide={hideModal}
        // {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Image Upload
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{padding: "10px"}}>
            <ImageUploadForm />
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default UploadModal;