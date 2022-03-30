import React from "react"

export default function Messages() {
  const MESSAGES = [
    {
      id: 1,
      timedate: new Date(),
      userName: "Süti",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 2,
      timedate: new Date(),
      userName: "Heléna",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ]

  return (
    <div className="p-2" id="messages">
      {MESSAGES.map((row) => {
        return (
          <div key={row.id} className="mb-2">
            <div>{row.timedate.toISOString()}</div>
            <strong>{row.userName}:</strong> {row.message}
          </div>
        )
      })}
    </div>
  )
}
