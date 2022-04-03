import { useContext, useState, useEffect } from "react"
import { MessagesCtx } from "./App"
import axios from "axios"

const DUMMY_USERNAME = "Frici"

export default function AddMessage() {
  const { addMessage } = useContext(MessagesCtx)
  const [newMessage, setNewMessage] = useState([])

  useEffect(() => {
    setNewMessage({ userName: `${DUMMY_USERNAME}` })
  }, [])

  function handleChange(value) {
    setNewMessage({ ...newMessage, ...value })
  }

  function handleMessageAdd(e, newMessage) {
    e.preventDefault()
    if (newMessage.message !== undefined && newMessage.message !== "") {
      axios.post("/api", newMessage)
        .catch((err) => console.error(err))
      
      handleChange({ message: "" })
      addMessage(newMessage)
    }
  }

  return (
    <form className="m-2" onSubmit={(e) => handleMessageAdd(e, newMessage)}>
      <div className="input-group">
        <span className="input-group-text">{newMessage.userName}</span>
        <input
          type="text"
          value={newMessage.message || ""}
          onChange={(e) => handleChange({ message: e.target.value })}
          name="textmessage"
          className="form-control"
          id="message-textarea"
        />
      </div>
    </form>
  )
}
