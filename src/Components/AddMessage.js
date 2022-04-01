import { useContext, useState, useEffect } from "react"
import { MessagesCtx } from "./App"

const DUMMY_USERNAME = "Frici"

export default function AddMessage() {
  const { handleMessageAdd } = useContext(MessagesCtx)
  const [newMessage, setNewMessage] = useState([])

  useEffect(()=>{
      setNewMessage({userName: `${DUMMY_USERNAME}`})
  },[])

  function handleChange(value) {
      setNewMessage({...newMessage, ...value})
  }

  return (
    <footer className="container-fluid">
      <div className="input-group">
        <textarea
          value={newMessage.message}
          onChange={(e) => handleChange({ message: e.target.value })}
          name="textmessage"
          className="form-control"
          id="message-textarea"
          required
        />
        <button
          onClick={() => handleMessageAdd(newMessage)}
          className="form-control btn btn-primary"
          value="&#8688;"
        />
      </div>

      <div className="input-group input-group-sm mt-1">
        <input
        //   value={newMessage.URL}
        //   onChange={(e) => handleChange({ URL: e.target.value })}
          className="form-control"
          type="file"
          id="formFile"
        />
      </div>
    </footer>
  )
}
