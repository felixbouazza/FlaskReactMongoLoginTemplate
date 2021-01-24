import React from 'react'
import {useSelector} from "react-redux"

import "./Profil.css";

export default function Profil() {

    const { user }= useSelector(state => ({
        ...state.UserReducer
    }))



    return (
        <div id="profil">
            <div className="profilTitle">
                <h2>Hello on Profile Page</h2>
            </div>
            <div className="userCard">
                <p>Pseudo : {user.pseudo}</p>
                <p>Email: {user.email}</p>
                <p>ApiKey: apiKey</p>
            </div>
        </div>
    )
}
