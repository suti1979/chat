import { useContext, useState, useEffect } from "react"
import { MessagesCtx } from "./App"
import { v4 as uuidv4 } from 'uuid';

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
      newMessage = { ...newMessage, id: uuidv4(), timedate: uuidv4() }
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
