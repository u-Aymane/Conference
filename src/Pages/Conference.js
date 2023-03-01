import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalState } from "..";
import AppServices from "../Services/AppServices";

const Conference = () => {
    const [data, setData] = useState({})
    const { id, name } = useParams()
    const [show, setLoading] = useGlobalState('loading')

    useEffect(() => {
        setLoading(true)
        AppServices.get(`/conferences/find/${id}`).then((response) => {
            setData(response)
            setLoading(false)
        }).catch((error) => {
            alert("Error")
        })
    }, [])
    

    return (
        <div className="wrapper-dashboard">
            <div className="navbar-custom">
                <img src="../../assets/logo.png" alt="logo" onClick={() => window.open('/dashboard', '_self')}/>
                <div className="online-wrapper">
                    <span>Serveur Online</span>
                    <img src="../../assets/online.png" alt="online" />
                </div>
            </div>
            <div className="text-welcome">
                <div className="text">
                    <h1 style={{fontWeight: 700}}>Bienvenue {name}!</h1>
                    <h4>{data?.description}</h4>
                    <h6>Conference ID: {data?.id} </h6>
                </div>
                <button onClick={() => window.open('/dashboard', '_self')}>Leave Conference</button>
            </div>
            <div className="video">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/X6CiUD3EcfQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default Conference