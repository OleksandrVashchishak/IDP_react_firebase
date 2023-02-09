import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { IUser } from '../../models/IUser';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

type IProps = {
    setIsLogin: React.SetStateAction<boolean>
    setUserId: React.SetStateAction<string>
}

const Login = ({setIsLogin, setUserId}:IProps) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const onLogin = () => {
        // signInWithEmailAndPassword(auth, email, password)
        //     .then((userCredential) => {
        //         const user = userCredential.user;
        //         if (user && user.reloadUserInfo) {
        //             localStorage.setItem('token', user.accessToken);
        //             localStorage.setItem('localId', user.reloadUserInfo.localId);
        //             setIsLogin(true)
        //             setUserId(user.reloadUserInfo.localId)
        //             navigate("/");
        //         }
        //     })
        //     .catch((error) => {
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //         console.log(errorCode, errorMessage)
        //     });
    }

    return (
        <div className="login-wrapper">
            <h3>Login</h3>
            <div>
                <TextField value={email} onChange={(e) => setEmail(e.target.value)} label="User" variant="standard" />
                <br />
                <TextField value={password} onChange={(e) => setPassword(e.target.value)} label="Password" type="password" variant="standard" />
                <br />
                <br />
                <Button onClick={() => onLogin()} variant="outlined">Login</Button>
            </div>
        </div>
    )
}

export default Login