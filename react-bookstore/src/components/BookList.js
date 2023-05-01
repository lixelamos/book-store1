import React, { useState, useEffect } from 'react';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      const response = await fetch('/books.json');
      const data = await response.json();
      setBooks(data);
    }

    fetchBooks();
  }, []);

  return (
    <div>
      {books.map(book => (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <p>Author: {book.author}</p>
          <p>Publication Date: {book.publicationDate}</p>
          <p>Genre: {book.genre}</p>
          <p>Description: {book.description}</p>
        </div>
      ))}
    </div>
  );
}

export default BookList;
