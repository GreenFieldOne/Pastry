import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const { username, password, confirmPassword } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted');
    if (isLogin) {e
      // Handle login
      try {
        const res = await fetch('http://127.0.0.1:3000/api/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
        console.log(res)
        if (res.ok) {
          const data = await res.json();
          console.log(data);
          // Redirect to home page
          navigate('/home/patisserie');
        } else {
          alert('Login failed. Please try again.');
        }
      } catch (err) {
        console.error('Login error:', err);
        alert('An error occurred. Please try again.');
      }
    } else {
      // Handle sign-up
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      try {
        const res = await fetch('http://127.0.0.1:3000/api/user/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
        if (res.ok) {
          const data = await res.json();
          console.log(data);
          alert('Sign-up successful! Please log in.');
          // Redirect to login page
          setIsLogin(true);
          navigate('/');
        } else {
          throw new Error('Sign-up failed');
        }
      } catch (err) {
        console.error('Sign-up error:', err);
        alert('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="login" onSubmit={onSubmit}>
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input
                type="text"
                className="login__input"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onChange}
                required
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input
                type="password"
                className="login__input"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onChange}
                required
              />
            </div>
            {!isLogin && (
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  type="password"
                  className="login__input"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={onChange}
                  required
                />
              </div>
            )}
            <button className="login__submit" type="submit">
              <span className="button__text">{isLogin ? 'Login' : 'Sign Up'}</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
            <div className="social-login">
              <p>
                {isLogin ? "Don't have an account?" : 'Already have an account?'}
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="toggle-button"
                >
                  {isLogin ? 'Sign Up' : 'Login'}
                </button>
              </p>
            </div>
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
};

export default Auth;
