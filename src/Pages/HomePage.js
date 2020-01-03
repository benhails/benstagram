import React, { useState, useEffect } from 'react'
import { UserBlock, UserProfile } from '../Components/Styled'
import 'typeface-roboto'
import axios from 'axios'
import UsersImages from '../Containers/UsersImages'
import ImagePlaceholder from '../Components/ImagePlaceholder'
import ImageLoadingIndicator from '../Components/ImageLoader'
import { Link } from 'react-router-dom'

// test

function HomePage() {

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get('https://insta.nextacademy.com/api/v1/users')
            .then(allUsers => {
                setUsers(allUsers.data)
                setIsLoading(false)
            })
            .catch(error => {
                console.log('ERROR: ', error)
            })
        return () => {
            console.log('homepage is unmounted') // this is where to catch when a page gets unmounted
        }
    }, [])

    return (
        <div>
            <ImageLoadingIndicator isLoading={isLoading} width="200px" height="200px"/>
            {users.map(({id, username, profileImage}) => (
                <UserBlock key={id}>
                    <UserProfile>
                        {ImagePlaceholder(profileImage, "50%", "150")}
                        <Link to={'users/'+id}>@{username}</Link> 
                    </UserProfile>
                    <UsersImages auth_token="" url={`https://insta.nextacademy.com/api/v1/images?userId=${id}`} />
                </UserBlock>
            ))}
        </div>
    );
}

export default HomePage;
