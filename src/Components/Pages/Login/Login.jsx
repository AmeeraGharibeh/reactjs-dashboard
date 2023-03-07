import { useState } from 'react';
import './Login.css'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../../Redux/Repositories/AuthRepo'

export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const {isFetching, error} = useSelector((state) => state.user);

    const handleLogin = (e)=> {
      e.preventDefault();
      login(dispatch, { email: username, password });
    };

  return (
    <div className='Login'>
        <div className="loginWrapper">
            <span>Username:</span>
            <input className= "input" type='text' placeholder="Enter your Email" onChange={(e)=> setUsername(e.target.value)}/>
            <span>password:</span>
            <input className= "input" type='password' placeholder="Enter your Password" onChange={(e)=> setPassword(e.target.value)}/>
            <button className="login-btn" onClick={handleLogin} disabled={isFetching}>{ !isFetching ? 'Login' : 'Logging in...'}</button>
            {error ? <div className='error'>Something went wrong...</div> : <div></div>}
        </div>
    </div>
  )
}
