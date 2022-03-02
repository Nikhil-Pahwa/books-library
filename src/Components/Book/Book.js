import React from 'react';
import "./Book.css";

function Book({ book }) {
    return (
        <div classname="book">
            <div className="book__name">{book.name}</div>
            <div className="book__desc">{book.desc}</div>
            <div className="book__author">{book.author}</div>
            <div className="book__count">{book.count}</div>
        </div>
    );
}

export default Book;
