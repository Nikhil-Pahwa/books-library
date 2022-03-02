import React from 'react';
import Book from '../Book/Book';

function BooksList({ books }) {

    const renderBookList = () => {
        console.log('*** books');
        return books.map((book) => (
            <Book book={book} />
        ))
    }

    return (
        <div classname="book-list">
            {renderBookList()}
        </div>
    );
}

export default BooksList;
