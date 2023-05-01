import React from 'react';

const BookList = ({ books }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Publication Date</th>
          <th>Genre</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.publicationDate}</td>
            <td>{book.genre}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookList;
