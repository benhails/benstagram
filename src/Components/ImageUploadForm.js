import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { FileButton } from './Styled'
import axios from 'axios'
import { ToastSuccess, ToastError } from './Toast'
import ImagePreviewer from './ImagePreviewer'

const ImageUploadForm = () => {

    const [imageFile, setImageFile] = useState()
    const [previewImage, setPreviewImage] = useState(null)
    const [uploadButton, setUploadButton] = useState({status: false, text: "Upload"})
    const {status, text} = uploadButton
    const [message, setMessage] = useState('')

    const handleFile = ({ target: { files } }) => {
        if (files.length !== 0) {
        console.log(files[0])
        setPreviewImage(URL.createObjectURL(files[0]))
        setImageFile(files[0])
        }
    }

    const handleUpload = (e) => {
        e.preventDefault()
        setUploadButton({status: true, text: "Please wait"})
        let auth_token = localStorage.getItem('jwt')

        let formData = new FormData()
        formData.append("image", imageFile);
       
        axios.post('https://insta.nextacademy.com/api/v1/images/', formData,
                { headers: {"Authorization" : `Bearer ${auth_token}`}}
                )
                .then((response) => {
                    // setUser(data)
                    console.log(response)
                    // setIsLoading(false)
                    setPreviewImage(null)
                    setImageFile(null)
                    setUploadButton({status: false, text: "Upload"})
                    setMessage("Your image was successfully uploaded!")
                    if(response.status === 200) {ToastSuccess("Your image was successfully uploaded!")}
                })
                .catch(error => {
                    console.log(error)
                    ToastError(error)
                })
    }

    const buttonDisabled = () => {if(!imageFile || status) {return true}}

    return (
        <Form>
            {/* <ImagePreviewer previewImage={previewImage} message={message}/> */}
            <ImagePreviewer previewImage={previewImage} message={message}/>
            <FileButton
                id="file"
                type="file"
                name="image-file"
                multiple={false} // actually the default of this is false so this isn't really needed
                onChange={handleFile}
            />
            <label htmlFor="file">{imageFile ? imageFile.name : "Choose a file"}</label>
            <Button
                variant="primary"
                type="submit"
                onClick={handleUpload}
                href="/"
                disabled={buttonDisabled()}   
            >
                {text}
            </Button>
        </Form>
    )
}

export default ImageUploadForm


