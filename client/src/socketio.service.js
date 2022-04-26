import { io } from "socket.io-client"

export let socket

export const initiateSocketConnection = () => {
  console.log(process.env.REACT_APP_SOCKET_ENDPOINT)
  socket = io("http://localhost:4001/")
}

export const sendMsg = (msg) => {
  socket.emit("serverchange", msg)
}


