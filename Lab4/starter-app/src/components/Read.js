import React from 'react';
import Books from './Books';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Read() {

  const [bookData, setData] = useState([]);

  //Retrieves data from the API and sets the value of bookData to the books array returned
  useEffect(
    () => {
      axios.get("https://jsonblob.com/api/jsonblob/1161593332966481920").then(
        (response)=>{
          setData(response.data.books);
        }
      ).catch(
        (error)=>{
          console.log(error);
        }
      );
    },[]
  );

    //Read calls Books, Books calls BookItem.
  return (
    <div>
      <h2>Read Component</h2>
      <Books myBooks={bookData}></Books>
    </div>
  );

}


export default Read;