import { useState, useEffect } from "react";
import {useDispatch} from "react-redux";

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

  const connect = () => {
    setToken("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MTEzNDIyMTYsIm5iZiI6MTYxMTM0MjIxNiwianRpIjoiODcxZGYzMTQtYjc2My00YjZiLTk2ZTUtMmIwM2RlZWFlNTRkIiwiZXhwIjoxNjExOTQ3MDE2LCJpZGVudGl0eSI6IjYwMGIyMTdhY2IxZjM1OTYyNmQ3Njc5NiIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.3oh4JYgViVPRIdFmfTdhCMpz3qVf-_VT-0t_uQK2JhA")
  }

  const disconnect = () => {
    setToken("")
    setUser({})
  }


  return (
    <div className="App">
      {token ? (
        <>
        <p>Welcome on you're Dashboard : {user.pseudo}</p>
        <p>You're email is : {user.email}</p>
        <p>You're id is : {user.id}</p>
        <button onClick={disconnect}>Disconnect</button>
        </>
      ):(
        <>
        HOMEPAGE
        <button onClick={connect}>Connect</button>
        </>
      )}
    </div>
  );
}


