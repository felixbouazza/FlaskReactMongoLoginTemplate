import React from 'react'
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"
import Profil from "./Profil";
import Home from "./Home";

export default function Logged({user, disconnect}) {
    return (
        <Router>
            <Navbar user={user} disconnect={disconnect}/>
            <div>
                <Sidebar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/profile" component={Profil}/>
                    <Redirect to={"/"}/>
                </Switch>
            </div>
        </Router>
    )
}
