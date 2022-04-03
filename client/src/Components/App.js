import Messages from "./Messages"
import AddMessage from "./AddMessage"
import { useState, useEffect, createContext } from "react"
import axios from "axios"

export const MessagesCtx = createContext()

export default function App() {
  const [messages, setMessages] = useState([])
  const messagesCtxValue = { addMessage }

  useEffect(() => {
    axios
      .get("/api")
      .then((res) => setMessages(res.data))
      .catch((err) => console.error(err))
  }, [])

  function addMessage(newMessage) {
    setMessages([...messages, newMessage])
  }

  return (
    <div className="container">
      <MessagesCtx.Provider value={messagesCtxValue}>
        <Messages messages={messages} />
        <AddMessage />
      </MessagesCtx.Provider>
    </div>
  )
}