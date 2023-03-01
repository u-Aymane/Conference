import React, { useCallback, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import AppServices from "../Services/AppServices";
import { useGlobalState } from "..";

const CreateConference = ({ show, setShow }) => {
  const handleClose = () => setShow(false)
  const [refresh, setRefresh] = useGlobalState('refresh')

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
      AppServices.post({}, `/conferences/add/?name=${data?.name}&owner=${localStorage.getItem('name')}&title=${data?.title}&description=${data?.description}`).then((response) => {
          setLoading(false)
          setShow(false)
          setRefresh(refresh + 1)
        }).catch((error) => {
          setLoading(false)
          alert("Username not available, please choose a valid username")
      })
  }
  
  return (
    <div className="page-container">
      <Modal show={show} size="md-down" centered={true} onHide={handleClose}>
            <div className="wrapper-popup" style={{height: "64vh"}}>
                <img src="assets/logo.png" alt="logo" />
                <div className="name" style={{marginTop: "2vh"}}>
                    <label>Nom de la conference</label>
                    <input placeholder="Nom de la conference" type="text" name="name" onChange={handleChange}></input>
                </div>
                <div className="name">
                    <label>Titre de la conference</label>
                    <input placeholder="Titre de la conference" type="text" name="title" onChange={handleChange}></input>
                </div>
                <div className="name">
                    <label>Description</label>
                    <input placeholder="Description" type="text" name="description" onChange={handleChange}></input>
                </div>
                <button className='btn-login' onClick={handleSubmit} style={{padding: "1vh 16vh"}}>
                    Creer
                </button>
            </div>
      </Modal>
    </div>
  );
  
}

export default CreateConference
