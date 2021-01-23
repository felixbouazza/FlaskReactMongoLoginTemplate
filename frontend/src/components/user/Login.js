import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import {backend} from "../../conf";
import Warning from "../warnings/Warning";
import axios from "axios";

export default function Login({connect, updateForm}) {

    const [ warningMessage, setWarningMessage ] = useState("")

    const {register, handleSubmit} = useForm();

    const onSubmit = async (data) => {
        if(data.password.length < 8) {
            setWarningMessage("Le mot de passe doit faire au minimum 8 caractères")
        } else {
            try {
                const url = backend + "/api/auth/login"
                const res = await axios.post(url, {
                    "email": data.email,
                    "password": data.password
                })
                connect(res.data.token)
            } catch(error) {
                setWarningMessage(error.response.data.message)
            }
        }
    }

    return (
        <div className="container-fluid">
            <h2 className="text-center">Se connecter</h2>
            <form onSubmit={handleSubmit(onSubmit)}className="mx-auto" style={{maxWidth: "400px"}}>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input ref={register} type="email" name="email" className="form-control" required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Mot de passe</label>
                    <input ref={register} type="password" name="password" className="form-control" required/>
                </div>
                <p className="d-inline-block" style={{cursor: "pointer"}} onClick={updateForm}>Pas encore de compte ?</p>
                <button type="submit" className="btn btn-success" style={{float: "right"}}>Se connecter</button>
            </form>


            {warningMessage ? (
            <Warning message={warningMessage}/>
            ) : null}

            
        </div>
    )
}
