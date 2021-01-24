import React, { useState } from 'react'
import Login from "../components/user/Login"
import SignUp from "../components/user/SignUp"


export default function NonLogged({connect}) {

    const [ changeForm, setChangeForm ] = useState(false)

    const updateForm = () => {
        setChangeForm(!changeForm)
    }

    return (
        <div className="container my-5 py-3">
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8 py-3 px-5 bg-primary rounded" style={{color: "white"}}>
                    <h1 className="my-4 text-center" style={{fontSize: "28px"}}>Bonjour et bienvenue dans mon application SEO</h1>
                    <p className="my-4 text-center" style={{fontSize: "18px"}}>Vous aurez à disposition dans cette application une liste d'outil vous permettant de gagner du temps dans votre SEO</p>
                    <div className="row">
                        {changeForm ? (
                            <SignUp updateForm={updateForm}/>
                        ):(
                            <Login connect={connect} updateForm={updateForm}/>
                        )}
                        
                    </div>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
    )
}
