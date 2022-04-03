import Messages from "./Messages"
import AddMessage from "./AddMessage"
import { useState, useEffect } from "react"
import axios from "axios"

export default function App() {
  const [messages, setMessages] = useState([])
  const [userName, setUserName] = useState("")

  useEffect(() => {
    axios
      .get("/api")
      .then((res) => setMessages(res.data))
      .catch((err) => console.error(err))
  }, [])

  useEffect(() => {
    const user = window.prompt("Please enter your name", "Poppy")
    setUserName(user)
  },[])

  return (
    <div className="App container">
      <Messages messages={messages} />
      <AddMessage userName={userName} />
    </div>
  )
}
