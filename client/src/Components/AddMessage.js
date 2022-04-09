import { useState, useEffect } from "react"
import axios from "axios"
import { sendMsg } from "../socketio.service"
import { v4 as uuidv4 } from "uuid"

export default function AddMessage(props) {
  const [newMessage, setNewMessage] = useState([])

  useEffect(() => {
    setNewMessage({ userName: props.userName })
  }, [props.userName])

  function handleChange(value) {
    setNewMessage({ ...newMessage, ...value })
  }

  function handleMessageAdd(e, newMessage) {
    e.preventDefault()
    if (newMessage.message !== undefined && newMessage.message !== "") {
      axios
        .post("/api", newMessage)
        //.then((dat)=> console.log("sent ", dat))
        .catch((err) => console.error(err))

      sendMsg(uuidv4())

      handleChange({ message: "" })
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
