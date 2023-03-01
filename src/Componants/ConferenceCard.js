import React, { useState } from "react";
import ConferencePopup from "./ConferencePopup";


const ConferenceCard = ({ data }) => {

    const [show, setShow] = useState(false);

    return(
        <div className="card-wrapper">
            <ConferencePopup show={show} setShow={setShow} confName={data.name}/>
            <div className="text-part">
                <div className="big-text">
                    <span>{data.title}</span>
                </div>
                <p>{data.description}</p>
                <span className="title">Conférence host: {data.owner.firstName} {data.owner.lastName}</span>
            </div>
            <div className="button-part" onClick={() => {
                setShow(true)
            }}>
                Rejoindre
            </div>
        </div>
    )
}

export default ConferenceCard