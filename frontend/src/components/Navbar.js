import React from 'react'
import "./Navbar.css";

export default function Navbar({user, disconnect}) {

    
    return (
        <div>
            <header>
                <nav>
                    <h1>Dashboard</h1>
                    <div className="navControl">
                        <p>Welcome {user.pseudo}</p>
                        <button onClick={disconnect}>Déconnecter</button>
                    </div>
                </nav>
            </header>
        </div>
    )
}
