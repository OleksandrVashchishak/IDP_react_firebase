import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';

const Login = ({ setIsLogin, setUserId }) => {
    // const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('')

    const onLogin = () => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user && user.reloadUserInfo) {
                    localStorage.setItem('token', user.accessToken);
                    localStorage.setItem('localId', user.reloadUserInfo.localId);
                    console.log(user.accessToken);
                    console.log(user.reloadUserInfo);

                    setIsLogin(true)
                    setLoading(false)
                    setUserId(user.reloadUserInfo.localId)
                    // navigate("/");
                }
            })
            .catch((error) => {
                setLoading(false)
                const errorCode = error.code;
                const errorMessage = error.message;
                switch (errorCode) {
                    case 'auth/user-not-found':
                        setMessage('Incorrect login')
                        break;
                    case 'auth/invalid-email':
                        setMessage('Invalid email format')
                        break;
                    case 'auth/wrong-password':
                        setMessage('Wrong password')
                        break;
                    default:
                        setMessage(errorMessage)
                        break;
                }
            });
    }

    return (
        <div className="login-wrapper" data-testid="login-root">
            <h3>Login</h3>
            <div>
                <TextField id='login-input' value={email} onChange={(e) => setEmail(e.target.value)} label="User" variant="standard" />
                <br />
                <TextField value={password} onChange={(e) => setPassword(e.target.value)} label="Password" type="password" variant="standard" />
                <br /><br />
                <p className='message-login'>{message}</p>
                <Button id='login-btn-custom-test' onClick={() => onLogin()} variant="outlined">Login</Button>
            </div>
            <div className={`prelouder ${loading && 'active'}`}><CircularProgress color="success" /></div>
        </div>
    )
}

export default Login