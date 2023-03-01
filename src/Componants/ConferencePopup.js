import React, { useCallback, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import AppServices from "../Services/AppServices";
import { useGlobalState } from "..";

const ConferencePopup = ({ show, setShow, confName }) => {
  const handleClose = () => setShow(false)
  
  const [username, setUsername] = useState('')

  const handleSubmit = () => {
    if (username !== ""){
        AppServices.post({}, `/join/${confName}?username=${username}`).then((response) => {
            window.open(`/conference/${confName}/${username}`, '_self')
        }).catch((error) => {
            alert("Username not available, please choose a valid username")
        })
    }else{
        alert("Please enter a username")
    }
  }
  
  return (
    <div className="page-container">
      <Modal show={show} size="md-down" centered={true} onHide={handleClose}>
            <div className="wrapper-popup">
                <img src="assets/logo.png" alt="logo" />
                <div className="name">
                    <label>Votre nom</label>
                    <input placeholder="Nom" type="text" onChange={(e) => setUsername(e.target.value)}></input>
                </div>
                <button className='btn-login' onClick={handleSubmit}>
                    Joindre
                </button>
            </div>
      </Modal>
    </div>
  );
  
}

export default ConferencePopup
