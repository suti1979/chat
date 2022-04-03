import { useEffect, useRef } from "react"

export default function Messages({ messages }) {
  const messagesEndRef = useRef(null)
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <div>
      <main>
        {messages.map((row) => {
          return (
            <div key={row.id} className="rounded m-2 p-2 message">
              <div className="">{row.timedate}</div>
              <strong>{row.userName}:</strong> {row.message}
            </div>
          )
        })}
        <div ref={messagesEndRef} />
      </main>
    </div>
  )
}
