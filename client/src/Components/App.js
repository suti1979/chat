import Messages from "./Messages"
import AddMessage from "./AddMessage"
import { useState, useEffect, createContext } from "react"

export const MessagesCtx = createContext()

export default function App() {
  const [messages, setMessages] = useState([])
  const messagesCtxValue = {addMessage}

  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((myJson) => setMessages(myJson))
  }

  useEffect(() => {
    getData()
  }, [])

  //  useEffect(() => {
  //    // ...messages
  //    console.log(messages)
  //  }, [messages])

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
