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
    <footer>
   
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
        <button onClick={() => handleMessageAdd(newMessage)} className="btn btn-primary">
        &#8688;
      </button>
  
    </footer>
  )
}
