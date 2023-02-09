import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const onSubmit = async () => {
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
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
                <Button onClick={() => onSubmit} variant="outlined">Registration</Button>
            </div>

        </div>

    )
}

export default Login