import React, { useEffect, useState } from "react";
import { useGlobalState } from "..";
import ConferenceCard from "../Componants/ConferenceCard";
import CreateConference from "../Componants/CreateConference";
import AppServices from "../Services/AppServices";

const Home = () => {
    const [data, setData] = useState([])
    const [show, setShow] = useState(false)
    const [refresh, setRefresh] = useGlobalState('refresh')

    const getData = () => {
        AppServices.get('/conferences').then((response) => {
            setData(response)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [refresh])
    
    

    return (
        <div className="wrapper-dashboard">
            <CreateConference show={show} setShow={setShow}/>
            <div className="navbar-custom">
                <img src="assets/logo.png" alt="logo" />
                <div className="online-wrapper">
                    <span>Serveur Online</span>
                    <img src="assets/online.png" alt="online" />
                </div>
            </div>
            <div className="conference-list">
                <div className="upper-bar">
                    <span>List Des Conferences</span>
                    <button onClick={() => setShow(true)}>Cree une conference</button>
                </div>
                <div className="conferences">
                    {data.map((val, i) => {
                        return <ConferenceCard data={val}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home