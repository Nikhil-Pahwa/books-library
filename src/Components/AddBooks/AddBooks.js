import React, { useState } from 'react';
import "./AddBooks.css";

function AddBooks({ book, submitBooks }) {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [author, setAuthor] = useState("");
    const [count, setCount] = useState("");

    const updateStates = (value, type) => {
        switch (type) {
            case "name": setName(value);
                break;
            case "desc": setDesc(value);
                break;
            case "author": setAuthor(value);
                break;
            case "count": setCount(value);
                break;
            default: console.log('invalid');
        }
    };

    const submitBook = () => {
        const newBook = {
            "name": name,
            "desc": desc,
            "author": author,
            "count": count
        };
        submitBooks(newBook);
    }

    return (
        <>
            <div classname="add-books">
                <div className="book__name">
                    <label>Name</label>
                    <input onChange={(e) => updateStates(e.target.value, "name")} />
                </div>
                <div className="book__desc">
                    <label>Desc</label>
                    <input onChange={(e) => updateStates(e.target.value, "desc")} />
                </div>
                <div className="book__author">
                    <label>Author</label>
                    <input onChange={(e) => updateStates(e.target.value, "author")} />
                </div>
                <div className="book__count">
                    <label>Count</label>
                    <input onChange={(e) => updateStates(e.target.value, "count")} />
                </div>
            </div>
            <div className="submit-wrapper">
                <button onClick={submitBook}>Submit</button>
            </div>
        </>
    );
}

export default AddBooks;
