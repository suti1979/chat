require("dotenv").config()
const express = require("express")
const app = express()
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

app.use(`${API_URL}/`, chatRouter)

app.listen(PORT, HOST, () =>
  console.log(`Server started @ http://${HOST}:${PORT}`)
)
