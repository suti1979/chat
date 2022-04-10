const express = require("express")
const router = express.Router()
const Chat = require("./../models/chat")

router.get("/", (req, res) => {
  Chat.find()
    .then((chat) => res.json(chat))
    .catch((e) => console.error(e))
})

router.post("/", (req, res) => {
  Chat(req.body).save((err, data) => {
    if (err) throw err
    res.send(200)
  })
})

module.exports = router
