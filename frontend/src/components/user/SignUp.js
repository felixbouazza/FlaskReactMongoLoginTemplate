import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {backend} from "../../conf";
import axios from "axios";
import Warning from "../warnings/Warning"

export default function SignUp({updateForm}) {

    const [ warningMessage, setWarningMessage ] = useState("")
    const [ succesfullySignUp, setSuccesfullySignUp ] = useState(false)


    const {register, handleSubmit} = useForm();

    
    const onSubmit = async (data) => {
        if(data.password.length < 8) {
            setWarningMessage("Le mot de passe doit faire au minimum 8 caractères")
            setSuccesfullySignUp(false)
        } else if(data.pseudo.length < 4) {
            setWarningMessage("Le pseudo doit faire au minimum 4 caractères")
            setSuccesfullySignUp(false)
        }
        else if (data.password !== data.confirmPassword) {
            setWarningMessage("Les deux mots de passe doivent correspondre")
            setSuccesfullySignUp(false)
        } else {
            try {
                const url = backend + "/api/auth/signup"
                await axios.post(url, {
                    "pseudo": data.pseudo,
                    "email": data.email,
                    "password": data.password
                })
                setSuccesfullySignUp(true)
                setWarningMessage("")
            } catch(error) {
                setWarningMessage(error.response.data.message)
                setSuccesfullySignUp(false)
            }
            
        }
    }

    return (
        <div className="container-fluid">
            <h2 className="text-center">S'inscrire</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mx-auto" style={{maxWidth: "400px"}}>
                <div className="mb-3">
                    <label className="form-label">Pseudo</label>
                    <input ref={register} type="text" name="pseudo" className="form-control" required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input ref={register} type="email" name="email" className="form-control" required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Mot de passe</label>
                    <input ref={register} type="password" name="password" className="form-control" required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Confirmer le mot de passe</label>
                    <input ref={register} type="password" name="confirmPassword" className="form-control" required/>
                </div>
                <p className="d-inline-block" style={{cursor: "pointer"}} onClick={updateForm}>Se connecter ?</p>
                <button type="submit" className="btn btn-success" style={{float: "right"}}>S'inscrire</button>
            </form>
            {warningMessage ? (
                <Warning message={warningMessage}/>
            ) : null}
            {succesfullySignUp ? (
                <div className="alert alert-success mt-3" role="alert">
                Votre compte a bien été créé, vous pouvez maintenant vous connecter
                </div>
            ) : null}
        </div>
    )
}
