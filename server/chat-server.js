require("dotenv").config()
const express = require("express")
const app = express()
const http = require("http").createServer(app)
const methodOverride = require("method-override")
const chatRouter = require("./routes/chatRouter")
const HOST = "127.0.0.1"

const PORT = process.env.PORT || 4001
const API_URL = process.env.PROD_API_URL || "/api"
const DB_NAME = process.env.DB_NAME
const DB_USER = process.env.DB_USER
const DB_PSW = process.env.DB_PSW

const mongoose = require("mongoose")
const URI = `mongodb+srv://${DB_USER}:${DB_PSW}@cluster0.vpjd4.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(express.urlencoded({ extended: false }))
app.use(methodOverride("_method"))
app.use(express.json())

const io = require("socket.io")(http, {
  cors: {
    origins: ["http://localhost:3001", "http://localhost:4001", "http://localhost:8080"],
  },
})


io.on("connection", (socket) => {
  console.log("user connected: ", socket.id)
  socket.on("disconnect", () => {
    console.log("user disconnected: ", socket.id)
   socket.disconnect()
  })
  socket.on("serverchange", (msg) => {
    console.log("message_id: " + msg)
    io.emit("serverchange", `server: ${msg}`)
  })
})

app.use(`${API_URL}/`, chatRouter)

http.listen(PORT, HOST, () => console.log(`Server started @ http://${HOST}:${PORT}`))
