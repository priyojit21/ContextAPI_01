import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';

export default function Login() {

    const {setUser} = useContext(UserContext);

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //Context api te data send korchi
        setUser({username,password})
        console.log(setUser);
    }
  return (
    <div>
      <h2>Login</h2>
      <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} placeholder='username'/>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='your pw'/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
