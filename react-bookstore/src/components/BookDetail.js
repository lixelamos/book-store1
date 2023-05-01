import React from 'react';

const BookDetail = ({ book }) => {
  return (
    <div className="BookDetail">
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>{
book.publicationDate}</p>
<p>{book.genre}</p>
<p>{book.description}</p>
</div>
);
};

export default BookDetail;