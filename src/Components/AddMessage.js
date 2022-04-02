import { useContext, useState, useEffect } from "react"
import { MessagesCtx } from "./App"

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
    handleChange({ message: "" })
    newMessage = { ...newMessage, id: new Date(), timedate: new Date() }
    addMessage(newMessage)
  }

  return (
    <footer>
      <form onSubmit={(e) => handleMessageAdd(e, newMessage)}>
        <label htmlFor="message-textarea" className="form-label">
          {newMessage.userName}
        </label>
        <input
          type="text"
          value={newMessage.message || ""}
          onChange={(e) => handleChange({ message: e.target.value })}
          name="textmessage"
          className="form-control m-2"
          id="message-textarea"
        />
      </form>
    </footer>
  )
}
