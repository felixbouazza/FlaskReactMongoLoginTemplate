import React from 'react'
import "./Sidebar.css";
import {Link} from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidenav">
            <Link className="sidenav-item" to="/">Home</Link>
            <Link className="sidenav-item" to="/profile">Profil</Link>
        </div>
    )
}
