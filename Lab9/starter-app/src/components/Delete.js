import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Delete(props) {
    let { id } = useParams();

    const nav = useNavigate();

    //Get the current values of the current book
    useEffect(() => {
        axios.get('http://localhost:4000/api/books/deleteID/'+id)
        .then((response) => {
            //Redirect to Books
            nav('/read');
        }).catch(function (error) {
            console.log(error);
        })
    }, []);

    return (
        <div>
            <h1>Book deleted. Redirecting...</h1>
        </div>
    );
}
