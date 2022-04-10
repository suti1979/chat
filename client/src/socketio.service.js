import { io } from "socket.io-client"

export let socket

export const initiateSocketConnection = () => {
  socket = io(process.env.REACT_APP_SOCKET_ENDPOINT)
  //console.log(`Connecting socket...`)
}

export const sendMsg = (msg) => {
  socket.emit("serverchange", msg)
}

// export const waitMsg = () => {
//   socket.on("serverchange", (msg) => {
//     return msg
//   })
// }

// export const disconnectSocket = () => {
//   //console.log("Disconnecting socket...")
//   if (socket) socket.disconnect()
// }


