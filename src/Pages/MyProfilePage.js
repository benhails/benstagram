import React, {useEffect, useState} from "react"
import { UserBlock, UserProfile } from "../Components/Styled"
import ImagePlaceholder from "../Components/ImagePlaceholder"
import UsersImages from "../Containers/UsersImages"
import ImageLoadingIndicator from "../Components/ImageLoader"
import axios from 'axios'
import UploadModal from '../Components/UploadModal'

const MyProfilePage = () => {

    let auth_token = localStorage.getItem('jwt')
    const [user, setUser] = useState({})
    const {id, username, profile_picture: profileImage} = user
    console.log(profileImage)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get('https://insta.nextacademy.com/api/v1/users/me',
                { headers: {"Authorization" : `Bearer ${auth_token}`}}
            )
                .then(({data}) => {
                    setUser(data)
                    console.log(data)
                    setIsLoading(false)
                })
                .catch(error => {
                    console.log(error)
                })
            },
        [auth_token]
    )

    return (
        <div>
            <UserBlock key={id}>
                <ImageLoadingIndicator isLoading={isLoading} width="200px" height="200px"/>
                <UserProfile> 
                    {ImagePlaceholder(profileImage, "50%", "150")}
                    @{username}
                    <UploadModal />
                </UserProfile> 
                <UsersImages auth_token={auth_token} url='https://insta.nextacademy.com/api/v1/images/me' />
            </UserBlock>
        </div>
        )
        }


export default MyProfilePage