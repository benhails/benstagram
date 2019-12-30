import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import { UserBlock } from "../Components/Styled"
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
            <ImageLoadingIndicator isLoading={isLoading} width="200px" height="200px"/>
            <UserBlock key={userId}>
                <div>{userId}: {user.username}</div> 
                {ImagePlaceholder(user.profileImage)}
                <UsersImages id={userId} />
            </UserBlock>
        </div>
        )
        }


export default UserProfilePage