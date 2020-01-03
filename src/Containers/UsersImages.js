import React, { useState, useEffect } from 'react'
import 'typeface-roboto'
import axios from 'axios'
import ImagePlaceholder from '../Components/ImagePlaceholder'
import ImageLoadingIndicator from '../Components/ImageLoader'
import { UsersPhotos } from '../Components/Styled'

const UsersImages = ({ auth_token, url }) => {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        // axios.get(`https://insta.nextacademy.com/api/v1/images?userId=${id}`)
        axios.get(`${url}`,
        auth_token !== "" ? { headers: {"Authorization" : `Bearer ${auth_token}`}} : "")
        .then(userPicsResult => {
            // console.log(id + ": " + userPicsResult.data)
            setImages(userPicsResult.data)
            setIsLoading(false)
        })
        .catch(error => {
            console.log('ERROR: ', error)
        })
    }, [url, auth_token])
    
    return (
        <UsersPhotos>
            <ImageLoadingIndicator isLoading={isLoading} width="100px" height="100px"/>
            {images.map((image, index) => (
                <div key={index}>
                    {ImagePlaceholder(image, "5%", "200")}
                </div>
            ))}
        </UsersPhotos>
    )
}

export default UsersImages;