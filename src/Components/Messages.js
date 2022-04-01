import React from "react"

export default function Messages({messages}) {

  return (
    <div className="container">
      <main>
        {messages.map((row) => {
          return (
            <div key={row.id} className="rounded m-2 p-2 message">
              <div>{row.timedate.toISOString()}</div>
              <strong>{row.userName}:</strong> {row.message}
            </div>
          )
        })}
      </main>
    </div>
  )
}
