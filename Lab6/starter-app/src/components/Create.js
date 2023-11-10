import React from 'react';
import { useState } from 'react';


function Create() {

  class bookClass {
    constructor(title, author, cover) { // isbn, pageCount, status, categories) {
      this.title = title;
      this.authors = [author];
      this.thumbnailURL = cover;
      this.isbn = 0;
      this.paegCount = 0;
      this.status = "MEAP";
      this.categories = [];

    }
  }

  //These allow us to modify the valeus of title, author and cover in the input boxes on the fly
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [cover, setCover] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); //Prevents data from being submitted multiple times
    var b = new bookClass(title, author, cover);

    //Post book to server
    console.log(JSON.stringify(b));
  };

  //onChange below lets the valeus of title, author and cover be updated every time the user changes the field.
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group" style={{ margin: "auto", width: "50%", textAlign: "center", padding: "10px" }}><h2><i>Fill Out Book Details</i></h2>
        <br />Add Book Title<br />
        <input type="text" className="form-control" value={title} onChange={(e) => { setTitle(e.target.value) }} /><br />
        <br />Add Book Author<br />
        <input type="text" className="form-control" value={author} onChange={(e) => { setAuthor(e.target.value) }} /><br />
        <br />Add Cover URL<br />
        <input type="text" className="form-control" value={cover} onChange={(e) => { setCover(e.target.value) }} /><br />
        <br /><input type="submit" className="form-control" value="Add Book"/>
      </div>
    </form>
  );

}






export default Create;