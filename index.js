const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send({ message: "hello worlda" })
})
app.listen(3000)
console.log("The app is listening on port 3000")