import React, { useState } from "react";
import { useGlobalState } from "..";
import AppServices from "../Services/AppServices";


const Register = () => {

    const [data, setData] = useState({})
    const [loading, setLoading] = useGlobalState('loading')

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
        console.log(data)
    }

    const handleSubmit = () => {
        setLoading(true)
        AppServices.post(data, '/registration/register').then((response) => {
            setLoading(false)
            window.open("/", '_self')
        }).catch((error) => {
            alert("Username already in the database, please choose another one")
        })
    }


    return (
        <div className="wrapper">
            <img src="assets/logo.png" style={{marginBottom: "22px  "}}/>
            <div className="input-wrapper">
                <label>Prénom</label>
                <input placeholder="Prénom" name="firstName" onChange={handleChange}></input>
            </div>
            <div className="input-wrapper">
                <label>Nom</label>
                <input placeholder="Nom" name="lastName"  onChange={handleChange}></input>
            </div>
            <div className="input-wrapper">
                <label>Password</label>
                <input placeholder="..........." type="password" name="password"  onChange={handleChange}></input>
            </div>
            <div className="input-wrapper">
                <label>Username</label>
                <input placeholder="Example" name="username"  onChange={handleChange}></input>
            </div>
            <div className="input-wrapper">
                <label>Email</label>
                <input placeholder="example@example.com" name="email"  onChange={handleChange}></input>
            </div>
            <button onClick={handleSubmit}>
                Register
            </button>
            
        </div>
    )
}

export default Register