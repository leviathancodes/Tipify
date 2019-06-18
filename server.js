const express = require('express')
const path = require('path')

const port = process.env.PORT || 3000
const app = express()

const publicDirectoryPath = path.join(__dirname, '/public')

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(port, () => {
    console.log(`The server is up on port ${port}`)
})
