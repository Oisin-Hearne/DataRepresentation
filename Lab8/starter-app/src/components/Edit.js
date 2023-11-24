import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Edit(props) {
    let { id } = useParams();

    const [title, setTitle] = useState("");
    const [url, setURL] = useState("");
    const [authors, setAuthors] = useState([""]);

    const nav = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:4000/api/book/'+id)
        .then((response) => {
            setTitle(response.data.title);
            setURL(response.data.thumbnailURL);
            setAuthors(response.data.authors);
        }).catch(function (error) {
            console.log(error);
        })
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newBook = {
            id: id,
            title: title,
            thumbnailURL: url,
            authors: authors
        };

        axios.put('http://localhost:4000/api/book'+id, newBook)
        .then((res) => {
            console.log(res.data);
            nav('/read');
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Change Book Title: </label>
                    <input type="text" classname="form-control" value={title}
                    onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Change Book Cover URL: </label>
                    <input type="text" classname="form-control" value={url}
                    onChange={(e) => setURL(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Change Author: </label>
                    <input type="text" classname="form-control" value={authors}
                    onChange={(e) => setURL(e.target.value)}/>
                </div>
                <div className="form-group">
                    <input type="submit" value="Edit Book" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    );
}
