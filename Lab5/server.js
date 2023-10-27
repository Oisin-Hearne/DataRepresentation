const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying !')
})

app.get('/hello/:name', (req, res) => {
    res.send('Hello, '+req.params.name)
})

app.get('/goodbye/:name', (req, res) => {
    res.send('Goodbye, '+req.params.name)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/api/books', (req, res) => {
})