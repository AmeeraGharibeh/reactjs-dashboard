import { useState } from 'react';
import './Login.css'

export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
    const handleLogin = (e)=> {
      e.preventDefault();

    };
  return (
    <div className='Login'>
        <div className="loginWrapper">
            <span>Username:</span>
            <input className= "input" type='text' placeholder="Enter your Email"/>
            <span>password:</span>
            <input className= "input" type='password' placeholder="Enter your Password"/>
            <button className="login-btn" onClick={()=> handleLogin}>Login</button>
        </div>
    </div>
  )
}
