import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import AppServices from '../Services/AppServices';

const Login = () => {
  const [data, setData] = useState({})

  const handleChange = (e) => {
    setData({
        ...data,
        [e.target.name]: e.target.value
    })
    console.log(data)
  }

  const handleSubmit = () => {
    AppServices.get(`/users/find/${data?.username}`).then((response) => {
        if (!Object.keys(response).includes('username')) {
          alert('Please check your username and password.')
        }else{
          localStorage.setItem('name', response?.username)
          window.open('/dashboard', '_self')
        }
    }).catch((error) => {
      alert('Please check your username and password.')
    })
  }
  
  return (
    <div className='body-wrapper'>
        <img src='assets/logo.png' alt='logo' />
        <div className='input-box'>
            <label htmlFor='email'>Username</label>
            <input placeholder='username' name='username' type="text" onChange={handleChange}></input>
        </div>
        <div className='input-box'>
            <label htmlFor='password'>Password</label>
            <input placeholder='Mot de passe' id='password' type="password"></input>
        </div>
        <button className='btn-login' style={{padding: "1vh 16vh"}} onClick={handleSubmit}>
            Login
        </button>
    </div>
  )
}

export default Login;
