import React from 'react'

export default function Warning({message}) {
    return (
        <div className="alert alert-danger mt-3" role="alert">
            {message}
        </div>
    )
}
