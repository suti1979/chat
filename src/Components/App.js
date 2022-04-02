import Messages from "./Messages"
import AddMessage from "./AddMessage"
import { useState, useEffect, createContext } from "react"

export const MessagesCtx = createContext()

export default function App() {
  const [messages, setMessages] = useState([])
  const messagesCtxValue = {
    addMessage,
  }

  useEffect(() => {
    // ...messages
    setMessages([DUMMY1, DUMMY2])
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

const DUMMY1 = {
  id: 1,
  timedate: new Date(),
  userName: "Süti",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
}
const DUMMY2 = {
  id: 2,
  timedate: new Date(),
  userName: "Heléna",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
}
