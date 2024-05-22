import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

export default function Profile() {

    const{user} = useContext(UserContext);

  return (
    <div>
        {!user ? <h1>Pls Login</h1> : <h1>Welcome {user.username}</h1>}
    </div>
  )
}
