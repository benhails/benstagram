import React, { useState, useEffect } from 'react'
import 'typeface-roboto'
import axios from 'axios'
import ImagePlaceholder from '../Components/ImagePlaceholder'
import ImageLoadingIndicator from '../Components/ImageLoader'

const UsersImages = ({ id }) => {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        axios.get(`https://insta.nextacademy.com/api/v1/images?userId=${id}`)
        .then(userPicsResult => {
            // console.log(id + ": " + userPicsResult.data)
            setImages(userPicsResult.data)
            setIsLoading(false)
        })
        .catch(error => {
            console.log('ERROR: ', error)
        })
    }, [id])
    
    return (
        <>
            <ImageLoadingIndicator isLoading={isLoading} width="100px" height="100px"/>
            {images.map((image, index) => (
                <div key={index}>
                    {ImagePlaceholder(image)}
                </div>
            ))}
        </>
    )
}

export default UsersImages;