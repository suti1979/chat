import Messages from "./Messages"
import AddMessage from "./AddMessage"
import { useState, useEffect } from "react"
import axios from "axios"
import {
  initiateSocketConnection,
  disconnectSocket,
  socket,
} from "../socketio.service"
import { io } from "socket.io-client"

export default function App() {
  const [messages, setMessages] = useState([])
  const [userName, setUserName] = useState("x")
  const [update, setUpdate] = useState(null)

  useEffect(() => {
    initiateSocketConnection()

    const cb = (msg) => {
      axios
      .get("/api")
      .then((res) => setMessages(res.data))
      .catch((err) => console.error(err))
    }

    socket.on("serverchange", cb)
    return () => {
      socket.off("serverchange", cb)
    }
  }, [])

  useEffect(() => {
    axios
      .get("/api")
      .then((res) => setMessages(res.data))
      .catch((err) => console.error(err))
  }, [])

  // useEffect(() => {
  //   const user = window.prompt("Please enter your name", "Poppy")
  //   setUserName(user)
  // }, [])

  return (
    <div className="App container">
      <Messages messages={messages} />
      <AddMessage userName={userName} />
    </div>
  )
}
