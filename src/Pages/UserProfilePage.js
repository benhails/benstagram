import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import { UserBlock, UserProfile } from "../Components/Styled"
import ImagePlaceholder from "../Components/ImagePlaceholder"
import UsersImages from "../Containers/UsersImages"
import ImageLoadingIndicator from "../Components/ImageLoader"
import axios from 'axios'

const UserProfilePage = () => {

    let {userId} = useParams();
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://insta.nextacademy.com/api/v1/users/${userId}`)
            .then(thisUser => {
                setUser(thisUser.data)
                console.log(thisUser.data)
                setIsLoading(false)
            })
            .catch(error => {
                console.log('ERROR: ', error)
            })
    }, [userId])

    
    return (
        <div>
            <UserBlock key={userId}>
                <ImageLoadingIndicator isLoading={isLoading} width="200px" height="200px"/>
                <UserProfile> 
                    {ImagePlaceholder(user.profileImage, "50%", "150")}
                    @{user.username}
                </UserProfile>
                <UsersImages auth_token="" url={`https://insta.nextacademy.com/api/v1/images?userId=${userId}`} />
            </UserBlock>
        </div>
        )
        }


export default UserProfilePage