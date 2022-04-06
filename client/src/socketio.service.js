import { io } from "socket.io-client"

export let socket

export const initiateSocketConnection = () => {
  socket = io(process.env.REACT_APP_SOCKET_ENDPOINT)
  //console.log(`Connecting socket...`)
}

export const disconnectSocket = () => {
  //console.log("Disconnecting socket...")
  if (socket) socket.disconnect()
}

// export const sendMsg = (msg) => {
//   socket.emit("sendMsg", msg)
// }

// export const waitMsg = () => {
 
//   socket.on("serverchange", msg => {
//     console.log("wai", msg)
//     return msg
//   })
// }

// export const waitMsg = (cb) => {
//   socket.on("serverchange", (msg) => {
//     console.log("wai", msg)
//     return cb(null, msg)
//   })
// }