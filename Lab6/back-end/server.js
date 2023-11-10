const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 4000
const data = { "books": [{ "title": "Learn Git in a Month of Lunches", "isbn": "1617292419", "pageCount": 0, "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg", "status": "MEAP", "authors": ["Rick Umali"], "categories": [] }, { "title": "MongoDB in Action, Second Edition", "isbn": "1617291609", "pageCount": 0, "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg", "status": "MEAP", "authors": ["Kyle Banker", "Peter Bakkum", "Tim Hawkins", "Shaun Verch", "Douglas Garrett"], "categories": [] }, { "title": "Getting MEAN with Mongo, Express, Angular, and Node", "isbn": "1617292036", "pageCount": 0, "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg", "status": "MEAP", "authors": ["Simon Holmes"], "categories": [] }] }
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//This lets our webapp act like an API - it returns JSON!
//We can now use localhost:4000/api/books instead of the URL we were previously using to fetch books.
//You can use jsonlint to compress the JSON into a single line.
app.get('/api/books', (req, res) => {
    res.json(data);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})