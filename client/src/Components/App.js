import Messages from "./Messages"
import AddMessage from "./AddMessage"
import { useState, useEffect } from "react"
import axios from "axios"
import { initiateSocketConnection, socket, disconnectSocket } from "../socketio.service"

export default function App() {
  const [messages, setMessages] = useState([])
  const [userName, setUserName] = useState("x")
  const [update, setUpdate] = useState(null)

  useEffect(() => {
    initiateSocketConnection()

    //const cb = (msg) => setUpdate(msg)
    socket.on("serverchange", msg => setUpdate(msg))
    
    return () => {
      disconnectSocket()
    }
  }, [])

  useEffect(() => {
    axios
      .get("/api")
      .then((res) => setMessages(res.data))
      .catch((err) => console.error(err))
  }, [update])

  useEffect(() => {
    const user = window.prompt("Please enter your name", "Poppy")
    setUserName(user)
  }, [])

  return (
    <div className="App container">
      <Messages messages={messages} />
      <AddMessage userName={userName} />
    </div>
  )
}
