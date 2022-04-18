import { io } from "socket.io-client"

export let socket

export const initiateSocketConnection = () => {
  socket = io(process.env.REACT_APP_SOCKET_ENDPOINT)
}

export const sendMsg = (msg) => {
  socket.emit("serverchange", msg)
}


