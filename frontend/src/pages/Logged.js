import React from 'react'

export default function Logged({user, disconnect}) {
    return (
        <div>
            <p>You're logged {user.pseudo}</p>
            <button onClick={disconnect}>Se déconnecter</button>
        </div>
    )
}
