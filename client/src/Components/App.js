import Messages from "./Messages"
import AddMessage from "./AddMessage"
import { useState, useEffect } from "react"
import axios from "axios"
//import { initiateSocketConnection } from "../socketio.service"
import { io } from "socket.io-client"


export default function App() {
  const [messages, setMessages] = useState([])
  const [userName, setUserName] = useState("x")
  const [update, setUpdate] = useState(null)
  const [sockett, setSockett] = useState()

  useEffect(() => {
    const socket = io(process.env.REACT_APP_SOCKET_ENDPOINT)
    
    setSockett(socket)
    //const cb = (msg) => setUpdate(msg)
    socket.on("serverchange", (msg) => setUpdate(msg))

    return () => {
      socket.disconnect()
    }
  }, [])

  useEffect(() => {
    axios
      .get("/api")
      .then((res) => setMessages(res.data))
      .catch((err) => console.error(err))
  }, [update])

  // useEffect(() => {
  //   const user = window.prompt("Please enter your name", "Poppy")
  //   setUserName(user)
  // }, [])

  return (
    <div className="App container">
      <Messages messages={messages} />
      <AddMessage userName={userName} sockett={sockett} />
    </div>
  )
}
