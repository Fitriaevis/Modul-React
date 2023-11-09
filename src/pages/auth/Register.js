import React, { useState } from 'react';  // Import 'React' once

import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Import 'useNavigate' correctly

function Register() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/auth/register', {
                username: username,
                password: password,
            });
            console.log('Pendaftaran Berhasil:', response.data);
            navigate('/login');
            window.location.reload();
        } catch (error) {
            console.log('Pendaftaran Gagal:', error);
        }
    };

    return(
        <div className="container">
            <h2>Form Register</h2>
                <div className="form-group">
                    <label>Username: </label>
                    <input className="form-control" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Password: </label>
                    <input className="form-control" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className="btn btn-primary mt-2" onClick={handleRegister}> Register </button>
        </div>
    );
}

export default Register;