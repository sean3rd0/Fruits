require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const {SERVER_PORT, CONNECTION_STRING} = process.env

const ctrl = require('./controller')

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log(`...I'm in`)
})

app.get('/api/fruits', ctrl.getAllFruits)
app.post('/api/fruits', ctrl.addFruit)
app.put('/api/fruits/:id', ctrl.editFruit)
app.delete('/api/fruits/:id', ctrl.deleteFruit)

app.listen(SERVER_PORT, () => {
    console.log(`Listening on ${SERVER_PORT}`)
})