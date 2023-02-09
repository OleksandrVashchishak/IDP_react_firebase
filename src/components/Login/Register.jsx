import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Register = ({setIsLogin, setUserId}) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const onSubmit = async () => {
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user && user.reloadUserInfo) {
                    localStorage.setItem('token', user.accessToken);
                    localStorage.setItem('localId', user.reloadUserInfo.localId);
                    setIsLogin(true)
                    setUserId(user.reloadUserInfo.localId)
                    navigate("/");
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    return (
        <div className="login-wrapper">
            <h3>Registarion</h3>
            <div>
                <TextField value={email} onChange={(e) => setEmail(e.target.value)} label="Email" variant="standard" />
                <br />
                <TextField value={password} onChange={(e) => setPassword(e.target.value)} label="Password" type="password" variant="standard" />
                <br />
                <br />
                <Button onClick={() => onSubmit()} variant="outlined">Registration</Button>
            </div>

        </div>

    )
}

export default Register