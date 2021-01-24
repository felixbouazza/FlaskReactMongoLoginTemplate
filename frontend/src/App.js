import { useState, useEffect } from "react";
import {useDispatch} from "react-redux";
import Logged from "./pages/Logged";
import NonLogged from "./pages/NonLogged";
import axios from "axios";
import {backend} from "./conf"
  export default function App() {

  const [ token, setToken ] = useState("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MTE0NDI1NTEsIm5iZiI6MTYxMTQ0MjU1MSwianRpIjoiNzM5MWM2ZGYtYWYxYi00YmNmLWI4YjQtNzJiMzI1YTQxZmUyIiwiZXhwIjoxNjEyMDQ3MzUxLCJpZGVudGl0eSI6IjYwMGM5ZjRkOTY1NTk1NWJmM2I1OTY1ZCIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.Sv9gNStqSRBcDi7WaazPT_0yDchXo7NsyrYP3HCIPN0")
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


