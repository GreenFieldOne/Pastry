import React, { useEffect, useState } from 'react';
import './Auth.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Auth() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
    const login = async (event) => {
        event.preventDefault(); // desactiver refresh de la page 

        try {
            const requestBody = {
                username: username,
                password: password,
            };
            const response = await axios.post('http://127.0.0.1:3000/api/user/login', requestBody)
            console.log('Login successful:', response);
            navigate('/home/patisserie');
        }
        catch (erreur) {
            console.log('erreur', erreur)
            if (erreur.response.status) {
                alert(`${erreur.response.data.message}`);
            } 

    }}

    return (
        <div className="container">
            <div className="screen">
                <div className="screen__content">
                    <form className="login">
                        <div className="login__field">
                            <FontAwesomeIcon icon={faUser} className="login__icon" />
                            <input type="text" className="login__input" placeholder="User name / Email" value={username}
                            onChange={handleUsernameChange} />
                        </div>
                        <div className="login__field">
                            <FontAwesomeIcon icon={faLock} className="login__icon" />
                            <input
                                type="password"
                                className="login__input"
                                placeholder="Password" value={password}
                                onChange={handlePasswordChange} />
                        </div>
                        <button className="button login__submit" onClick={login}>
                            <span className="button__text">Log In Now</span>
                            <FontAwesomeIcon icon={faChevronRight} className="button__icon" />
                        </button>
                    </form>
                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape4"></span>
                    <span className="screen__background__shape screen__background__shape3"></span>
                    <span className="screen__background__shape screen__background__shape2"></span>
                    <span className="screen__background__shape screen__background__shape1"></span>
                </div>
            </div>
        </div>
    );
}

export default Auth;
