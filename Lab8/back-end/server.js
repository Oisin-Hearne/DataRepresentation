const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const port = 4000
var data = { "books": [{ "title": "Learn Git in a Month of Lunches", "isbn": "1617292419", "pageCount": 0, "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg", "status": "MEAP", "authors": ["Rick Umali"], "categories": [] }, { "title": "MongoDB in Action, Second Edition", "isbn": "1617291609", "pageCount": 0, "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg", "status": "MEAP", "authors": ["Kyle Banker", "Peter Bakkum", "Tim Hawkins", "Shaun Verch", "Douglas Garrett"], "categories": [] }, { "title": "Getting MEAN with Mongo, Express, Angular, and Node", "isbn": "1617292036", "pageCount": 0, "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg", "status": "MEAP", "authors": ["Simon Holmes"], "categories": [] }] }
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Mongoose Stuff
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.fk5vge6.mongodb.net/?retryWrites=true&w=majority');


}

//Book Schema - Effectively outlines what fields are going to be in the database.
const bookSchema = new mongoose.Schema({
    title: String,
    isbn: String,
    pageCount: Number,
    thumbnailUrl: String,
    status: String,
    authors: [String],
    categories: [String]
});

const bookModel = mongoose.model('Book', bookSchema);

//CORS code
const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();

});

//Fetch a book from the database by ID or Title
app.get('/api/books/searchTitle/:booktitle', async (req, res) => {
    let books = await bookModel.find({title: req.params.booktitle});
    res.json(books);
})
app.get('/api/books/searchID/:bookID', async (req, res) => {
    let books = await bookModel.find({_id: req.params.bookID});
    res.json(books);
})

//Fetches all of the books from our database.
app.get('/api/books', async (req, res) => {
    let books = await bookModel.find({});
    res.json(books);
})

//Send a book to the database
app.post('/api/books', (req, res) => {

    console.log(req.body);

    bookModel.create({
        title:req.body.title,
        thumbnailUrl:req.body.thumbnailURL,
        authors:req.body.authors,
        isbn:"0000",
        pagecount:"0",
        status:"MEAP",
        categories:[]

    }).then(()=>{res.send("Book Created")})
    .catch(()=>{res.send("Book Not Created")});
})

app.put('/api/books/:id', (req, res) => {
    
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})