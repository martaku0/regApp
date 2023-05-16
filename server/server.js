const express = require("express")
const app = express()
const PORT = 3000
const bodyParser = require("body-parser")

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

const context = {
    users: [],
    nicknames: [],
    indexes: []
}

app.get("/", (req, res) => {
    res.setHeader("Content-type", "application/json")

    res.send(context.nicknames)
})

app.post('/', (req, res) => {
    console.log(req.body)
    temp = req.body
    date = new Date();
    month = (date.getMonth() + 1).toString()
    month = month.padStart(2, "0")
    day = date.getDate().toString()
    day = day.padStart(2, "0")
    hours = date.getHours().toString()
    hours = hours.padStart(2, "0")
    mins = date.getMinutes().toString()
    mins = mins.padStart(2, "0")
    secs = date.getSeconds().toString()
    secs = secs.padStart(2, "0")
    temp.registered = date.getFullYear() + "-" + month + "-" + day + " " + hours + ":" + mins + ":" + secs
    temp.index = context.users.length
    context.indexes.push(context.users.length)
    context.users.push(temp)
    context.nicknames.push(req.body.login)
    console.log(context)
    res.send(context.nicknames)
})

app.post('/details', (req, res) => {
    res.setHeader("Content-type", "application/json")

    res.send(context.users)
})

app.post('/del', (req, res) => {
    const inx = req.body.index

    context.users.splice(inx, 1)
    context.nicknames.splice(inx, 1)
    context.indexes.splice(inx, 1)

    console.log(context)

    res.send(context.nicknames)
})

app.post('/indexes', (req, res) => {
    console.log(context)

    res.send(context.indexes)
})


app.listen(PORT, () => {
    console.log(`Server na porcie: ${PORT}`)
})