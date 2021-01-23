import { useState, useEffect } from "react";
import {useDispatch} from "react-redux";
import Logged from "./pages/Logged";
import NonLogged from "./pages/NonLogged";
import axios from "axios";
import {backend} from "./conf"
export default function App() {

  const [ token, setToken ] = useState("")
  const [ user, setUser ] = useState({})

  const dispatch = useDispatch();

  const getUser = async () => {
    if(token) {
      const url = backend + "/api/user/profile"
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setUser(res.data)
      dispatch({
        type: "LOGIN",
        payload: {
          token: token,
          user: res.data
        }
      })
    } 
  }

  useEffect(() => {
    getUser();
  }, [token])

  const connect = (newToken) => {
    setToken(newToken)
  }

  const disconnect = () => {
    setToken("")
    setUser({})
  }


  return (
    <div className="App">
      {token ? (
        <Logged user={user} disconnect={disconnect}/>
      ):(
        <NonLogged connect={connect}/>
      )}
    </div>
  );
}


