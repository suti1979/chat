import Messages from "./Messages"
import AddMessage from "./AddMessage"
import { useState, useEffect } from "react"
import axios from "axios"
import { initiateSocketConnection, disconnectSocket, socket } from "../socketio.service"

export default function App() {
  const [messages, setMessages] = useState([])
  const [userName, setUserName] = useState("x")
  const [update, setUpdate] = useState(null)

  useEffect(() => {
    initiateSocketConnection()
    socket.on("serverchange", (msg) => {
      setUpdate(msg)
      console.log(update)
      
    })

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
