import React, { useState } from 'react';

import BooksList from './Components/BooksList/BooksList'
import Search from './Components/Search/Search';
import AddBooks from './Components/AddBooks/AddBooks';
import { booksData } from './Mock/sampleData';
import './App.css';

function App() {

  const [filteredList, setFilteredList] = useState(booksData);

  const filterBooks = (searchedString) => {
    let filteredBooks = booksData.filter((book) => {
      let isFound = false;
      for (let i in book) {
        isFound = (book[i].toString().toLowerCase().includes(searchedString.toLowerCase()));
        if (isFound) {
          break;
        }
      }
      return isFound;
    });
    setFilteredList(filteredBooks);
  };

  const onSubmit = (newBook) => {
    setFilteredList([...filteredList, newBook]);
  };

  return (
    <div className="App">
      <Search searchedString={filterBooks} />
      <BooksList books={filteredList} />
      <AddBooks submitBooks={onSubmit} />
    </div>
  );
}

export default App;
