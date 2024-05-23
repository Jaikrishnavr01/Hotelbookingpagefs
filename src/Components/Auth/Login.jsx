import React, { useEffect, useState } from 'react';
import { useAuth } from './Auth';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; // Import CSS file for styling
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userList, setUserList] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const auth = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/users/get')
        .then(res => setUserList(res.data));
        console.log(userList)
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        const user = userList.find(x => x.email === email);

        if (user) {
            if (user.password === password) {
                auth.login(user.name);
                navigate('/bookingpage');
            } else {
                setErrorMessage('Invalid Password');
            }
        } else {
            setErrorMessage('Invalid User');
        }
    };

    return (
        <>
        <Navbar/> <br /> <br /> <br />
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Login</button>
            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
        </div>
        <br />
        <br /><br />
        <Footer/>
        </>
    );
}
